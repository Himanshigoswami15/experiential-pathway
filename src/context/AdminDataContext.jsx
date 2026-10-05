import React, { createContext, useContext, useState, useEffect } from 'react';
import databaseSeed from '../data/database.json';

const LOCAL_STORAGE_KEY = 'ep_admin_data_v1';
const AUTH_STORAGE_KEY = 'ep_admin_auth_v1';

// Primary database seed loaded directly from database.json
export const DEFAULT_ADMIN_DATA = databaseSeed;

const AdminDataContext = createContext(null);

export function AdminDataProvider({ children }) {
  const [data, setData] = useState(() => {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        // Merge with defaults to ensure all keys exist
        return {
          ...DEFAULT_ADMIN_DATA,
          ...parsed,
          hero: { ...DEFAULT_ADMIN_DATA.hero, ...(parsed.hero || {}) },
          destinations: { ...DEFAULT_ADMIN_DATA.destinations, ...(parsed.destinations || {}) },
          contact: { ...DEFAULT_ADMIN_DATA.contact, ...(parsed.contact || {}) }
        };
      }
    } catch (e) {
      console.error('Error loading admin data from localStorage:', e);
    }
    return DEFAULT_ADMIN_DATA;
  });

  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(() => {
    try {
      return localStorage.getItem(AUTH_STORAGE_KEY) === 'true';
    } catch {
      return false;
    }
  });

  // Save to localStorage on data change
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.error('Error saving admin data to localStorage:', e);
    }
  }, [data]);

  // Auth functions
  const loginAdmin = (username, password) => {
    // Default credentials: admin / admin123
    if ((username === 'admin' && password === 'admin123') || (username === 'admin' && password === 'admin')) {
      setIsAdminLoggedIn(true);
      localStorage.setItem(AUTH_STORAGE_KEY, 'true');
      return { success: true };
    }
    return { success: false, message: 'Invalid admin credentials. Use admin / admin123' };
  };

  const logoutAdmin = () => {
    setIsAdminLoggedIn(false);
    localStorage.removeItem(AUTH_STORAGE_KEY);
  };

  // 1. Hero Video updates
  const updateHero = (heroUpdates) => {
    setData(prev => ({
      ...prev,
      hero: { ...prev.hero, ...heroUpdates }
    }));
  };

  // 2. Team Member actions
  const addTeamMember = (member) => {
    const newMember = {
      id: 'team-' + Date.now(),
      active: true,
      ...member
    };
    setData(prev => ({
      ...prev,
      teamMembers: [newMember, ...prev.teamMembers]
    }));
    return newMember;
  };

  const updateTeamMember = (id, updatedFields) => {
    setData(prev => ({
      ...prev,
      teamMembers: prev.teamMembers.map(m => m.id === id ? { ...m, ...updatedFields } : m)
    }));
  };

  const deleteTeamMember = (id) => {
    setData(prev => ({
      ...prev,
      teamMembers: prev.teamMembers.filter(m => m.id !== id)
    }));
  };

  const reorderTeamMembers = (newMembersList) => {
    setData(prev => ({
      ...prev,
      teamMembers: newMembersList
    }));
  };

  // 3. Destination & Itineraries actions
  const addItinerary = (destinationKey, itinerary) => {
    const key = destinationKey.toLowerCase();
    const newItinerary = {
      id: `${key}-it-${Date.now()}`,
      country: key.toUpperCase(),
      ...itinerary
    };

    setData(prev => {
      const dest = prev.destinations[key] || {
        name: key.toUpperCase(),
        tagline: '',
        heroImg: '/gallery/india/24.png',
        overview: '',
        itineraries: []
      };

      return {
        ...prev,
        destinations: {
          ...prev.destinations,
          [key]: {
            ...dest,
            itineraries: [...(dest.itineraries || []), newItinerary]
          }
        }
      };
    });
    return newItinerary;
  };

  const updateItinerary = (destinationKey, itineraryId, updatedFields) => {
    const key = destinationKey.toLowerCase();
    setData(prev => {
      const dest = prev.destinations[key];
      if (!dest) return prev;
      return {
        ...prev,
        destinations: {
          ...prev.destinations,
          [key]: {
            ...dest,
            itineraries: (dest.itineraries || []).map(it => it.id === itineraryId ? { ...it, ...updatedFields } : it)
          }
        }
      };
    });
  };

  const deleteItinerary = (destinationKey, itineraryId) => {
    const key = destinationKey.toLowerCase();
    setData(prev => {
      const dest = prev.destinations[key];
      if (!dest) return prev;
      return {
        ...prev,
        destinations: {
          ...prev.destinations,
          [key]: {
            ...dest,
            itineraries: (dest.itineraries || []).filter(it => it.id !== itineraryId)
          }
        }
      };
    });
  };

  const updateDestinationOverview = (destinationKey, fields) => {
    const key = destinationKey.toLowerCase();
    setData(prev => {
      const dest = prev.destinations[key] || {};
      return {
        ...prev,
        destinations: {
          ...prev.destinations,
          [key]: { ...dest, ...fields }
        }
      };
    });
  };

  // 4. Contact Information actions
  const updateContact = (contactUpdates) => {
    setData(prev => ({
      ...prev,
      contact: {
        ...prev.contact,
        ...contactUpdates,
        social: {
          ...prev.contact.social,
          ...(contactUpdates.social || {})
        }
      }
    }));
  };

  const addInquiry = (inquiry) => {
    const newInquiry = {
      id: 'inq-' + Date.now(),
      createdAt: new Date().toISOString(),
      status: 'new',
      ...inquiry
    };
    setData(prev => ({
      ...prev,
      contact: {
        ...prev.contact,
        inquiries: [newInquiry, ...(prev.contact.inquiries || [])]
      }
    }));
    return newInquiry;
  };

  const deleteInquiry = (id) => {
    setData(prev => ({
      ...prev,
      contact: {
        ...prev.contact,
        inquiries: (prev.contact.inquiries || []).filter(inq => inq.id !== id)
      }
    }));
  };

  const markInquiryStatus = (id, status) => {
    setData(prev => ({
      ...prev,
      contact: {
        ...prev.contact,
        inquiries: (prev.contact.inquiries || []).map(inq => inq.id === id ? { ...inq, status } : inq)
      }
    }));
  };

  // 5. Backup & Reset
  const resetToDefaults = () => {
    if (window.confirm('Are you sure you want to reset all admin data back to factory defaults? All manual edits will be replaced.')) {
      setData(DEFAULT_ADMIN_DATA);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(DEFAULT_ADMIN_DATA));
      return true;
    }
    return false;
  };

  const exportData = () => {
    const jsonStr = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `experiential-pathways-data-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const importData = (jsonString) => {
    try {
      const parsed = JSON.parse(jsonString);
      setData(parsed);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(parsed));
      return { success: true };
    } catch (err) {
      return { success: false, error: err.message };
    }
  };

  return (
    <AdminDataContext.Provider
      value={{
        data,
        isAdminLoggedIn,
        loginAdmin,
        logoutAdmin,
        // Hero
        updateHero,
        // Team
        addTeamMember,
        updateTeamMember,
        deleteTeamMember,
        reorderTeamMembers,
        // Destinations & Itineraries
        addItinerary,
        updateItinerary,
        deleteItinerary,
        updateDestinationOverview,
        // Contact
        updateContact,
        addInquiry,
        deleteInquiry,
        markInquiryStatus,
        // Global
        resetToDefaults,
        exportData,
        importData
      }}
    >
      {children}
    </AdminDataContext.Provider>
  );
}

export function useAdminData() {
  const context = useContext(AdminDataContext);
  if (!context) {
    throw new Error('useAdminData must be used within an AdminDataProvider');
  }
  return context;
}
