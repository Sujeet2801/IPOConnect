import React, { useEffect, useState } from 'react';
import axios from 'axios';
import validator from 'validator';
import {
  fetchAllBrokers,
  createBroker,
  updateBroker,
  deleteBroker
} from '../../services/api/api.js';

const AddBrokerPage = () => {
    const [brokers, setBrokers] = useState([]);
    const [newBroker, setNewBroker] = useState({
        companyName: '',
        companyLogo: '',
        accOpenCharge: '',
        accounts: '',
        deliveryCharge: '',
        intradayBrokerage: '',
        maintainanceCharge: '',
        ratings: '',
        reviews: '',
        openAccLink: '',
        learnMore: '',
        tradingCategory: []
    });
    const [errors, setErrors] = useState({});
    const [editMode, setEditMode] = useState(false);
    const [editBrokerName, setEditBrokerName] = useState('');

  useEffect(() => {
    loadBrokers();
  }, []);

  const loadBrokers = async () => {
    try {
      const response = await fetchAllBrokers();
      setBrokers(response.data.data.allBrokers);
    } catch (error) {
      console.error('Error fetching brokers:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'tradingCategory') {
      setNewBroker({
        ...newBroker,
        [name]: value.split(',').map((v) => v.trim())
      });
    } else {
      setNewBroker({
        ...newBroker,
        [name]: value
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!newBroker.companyName) newErrors.companyName = 'Company name is required';
    if (!newBroker.companyLogo || !validator.isURL(newBroker.companyLogo)) 
      newErrors.companyLogo = 'Valid logo URL required';
    if (!newBroker.ratings || isNaN(newBroker.ratings) || newBroker.ratings < 0 || newBroker.ratings > 5) newErrors.ratings = 'Ratings must be 0–5';
    if (!newBroker.reviews || isNaN(newBroker.reviews) || newBroker.reviews < 0) 
      newErrors.reviews = 'Positive number required';
    if (!newBroker.accounts) newErrors.accounts = 'Accounts info is required';
    if (!newBroker.openAccLink || !validator.isURL(newBroker.openAccLink)) 
      newErrors.openAccLink = 'Valid URL required';
    if (!newBroker.learnMore || !validator.isURL(newBroker.learnMore)) 
      newErrors.learnMore = 'Valid URL required';
    if (!Array.isArray(newBroker.tradingCategory) || newBroker.tradingCategory.length === 0)
      newErrors.tradingCategory = 'At least one trading category required';
    if (!newBroker.accOpenCharge) newErrors.accOpenCharge = 'Opening charge required';
    if (!newBroker.maintainanceCharge) newErrors.maintainanceCharge = 'Maintenance charge required';
    if (!newBroker.deliveryCharge) newErrors.deliveryCharge = 'Delivery charge required';
    if (!newBroker.intradayBrokerage) newErrors.intradayBrokerage = 'Intraday brokerage required';

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      if (editMode) {
        await updateBroker(editBrokerName, newBroker);
      } else {
        await createBroker(newBroker);
      }

      setNewBroker({
        companyName: '',
        companyLogo: '',
        accOpenCharge: '',
        accounts: '',
        deliveryCharge: '',
        intradayBrokerage: '',
        maintainanceCharge: '',
        ratings: '',
        reviews: '',
        openAccLink: '',
        learnMore: '',
        tradingCategory: []
      });
      setEditMode(false);
      setErrors({});
      loadBrokers();
    } catch (error) {
      console.error('Error saving broker:', error);
    }
  };

  const handleDelete = async (name) => {
    if (!window.confirm(`Delete broker: ${name}?`)) return;
    try {
      await deleteBroker(name);
      loadBrokers();
    } catch (error) {
      console.error('Error deleting broker:', error);
    }
  };

  const handleEdit = (broker) => {
    setNewBroker({
      ...broker,
      tradingCategory: broker.tradingCategory.join(',')
    });
    setEditBrokerName(broker.companyName);
    setEditMode(true);
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">{editMode ? 'Edit Broker' : 'Add Broker'}</h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { label: 'Company Name', name: 'companyName' },
          { label: 'Logo URL', name: 'companyLogo' },
          { label: 'Account Opening Charge', name: 'accOpenCharge' },
          { label: 'Accounts', name: 'accounts' },
          { label: 'Delivery Charge', name: 'deliveryCharge' },
          { label: 'Intraday Brokerage', name: 'intradayBrokerage' },
          { label: 'Maintenance Charge', name: 'maintainanceCharge' },
          { label: 'Ratings', name: 'ratings' },
          { label: 'Reviews', name: 'reviews' },
          { label: 'Open Account Link', name: 'openAccLink' },
          { label: 'Learn More Link', name: 'learnMore' },
          { label: 'Trading Categories (comma-separated)', name: 'tradingCategory' }
        ].map((field) => (
          <div key={field.name}>
            <label className="block text-sm font-semibold">{field.label}</label>
            <input
              type="text"
              name={field.name}
              value={newBroker[field.name]}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm 
              focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors[field.name] && (
              <p className="text-red-500 text-xs mt-1">{errors[field.name]}</p>
            )}
          </div>
        ))}

        <div className="md:col-span-2">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            {editMode ? 'Update Broker' : 'Add Broker'}
          </button>
        </div>
      </form>

      <h2 className="text-2xl font-semibold mt-10 mb-4">Broker List</h2>
      <div className="space-y-4">
        {brokers.map((broker) => (
          <div key={broker.companyName} className="flex items-center justify-between border 
          p-4 rounded-lg shadow-sm">
            <div className="flex items-center gap-4">
              <img src={broker.companyLogo} alt={broker.companyName} className="w-12 h-12 rounded-full" />
              <div>
                <h3 className="font-medium text-lg">{broker.companyName}</h3>
                <p className="text-sm text-gray-600">Rating: {broker.ratings} | Reviews: {broker.reviews}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(broker)}
                className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(broker.companyName)}
                className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddBrokerPage;
