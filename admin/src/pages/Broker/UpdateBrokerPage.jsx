import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchBrokerDetail, updateBroker } from "../../services/api/api.js"; // Adjust path accordingly

const UpdateBrokerPage = () => {
  let { companyName } = useParams();
//   companyName = companyName.replace(/ /g, "-");
  console.log(companyName);
  
  const navigate = useNavigate();

  const [brokerData, setBrokerData] = useState({
    companyName: "",
    website: "",
    rating: "",
    contactEmail: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadBroker = async () => {
      try {
        setLoading(true);
        const response = await fetchBrokerDetail(companyName);
        console.log(response);
        setBrokerData(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load broker data");
        setLoading(false);
      }
    };

    loadBroker();
  }, [companyName]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBrokerData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateBroker(companyName, brokerData);
      navigate("/brokers"); // Redirect after successful update
    } catch (err) {
      alert("Failed to update broker");
    }
  };

  if (loading) return <div>Loading broker data...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h2>Update Broker: {companyName}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Company Name:</label>
          <input
            type="text"
            name="companyName"
            value={brokerData.companyName}
            onChange={handleChange}
            disabled
          />
        </div>

        <div>
          <label>Website:</label>
          <input
            type="url"
            name="website"
            value={brokerData.website}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Rating:</label>
          <input
            type="number"
            name="rating"
            value={brokerData.rating}
            onChange={handleChange}
            min="0"
            max="5"
            step="0.1"
            required
          />
        </div>

        <div>
          <label>Contact Email:</label>
          <input
            type="email"
            name="contactEmail"
            value={brokerData.contactEmail}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Update Broker</button>
      </form>
    </div>
  );
};

export default UpdateBrokerPage;
