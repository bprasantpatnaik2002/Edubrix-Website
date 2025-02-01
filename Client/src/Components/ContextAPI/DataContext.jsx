import { createContext, useContext, useEffect, useState } from "react";

const API_BASE_URL = "http://localhost:3000"; // Replace with your backend URL

export const DataContext = createContext(); // Create Context

export const DataProvider = ({ children }) => {
    const [fall, setFall] = useState([]);
    const [parent, setParent] = useState([]);
    const [services, setServices] = useState([]);
    const [blogs, setBlogs] = useState([]);
    const [coupons, setCoupons] = useState([]);
    const [newsUpdate, setNewsUpdate] = useState([]);
    const [batches, setBatches] = useState([]);
    const [reviews, setReviews] = useState([]);

    // Fetch data from backend when component mounts

    // CRUD Operations
    const addData = async (endpoint, newData, setData) => {
        try {
            const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newData),
                credentials: 'include', // Ensure cookies are sent with POST requests
            });
            if (response.ok) {
                const updatedData = await response.json();
                setData(updatedData);
            }
        } catch (error) {
            console.error(`Error adding data to ${endpoint}:`, error);
        }
    };

    const removeData = async (endpoint, id, setData) => {
        try {
            const response = await fetch(`${API_BASE_URL}/${endpoint}/${id}`, {
                method: "DELETE",
                credentials: 'include', // Ensure cookies are sent with DELETE requests
            });
            if (response.ok) {
                setData(prevData => prevData.filter(item => item._id !== id));
            }
        } catch (error) {
            console.error(`Error deleting data from ${endpoint}:`, error);
        }
    };

    return (
        <DataContext.Provider value={{
            fall, parent, services, blogs, coupons, newsUpdate, batches, reviews,
            addFallLink: (newLink) => addData("fall", { link: newLink }, setFall),
            removeFallLink: (id) => removeData("fall", id, setFall),
            addParentLink: (newLink) => addData("parent", { link: newLink }, setParent),
            removeParentLink: (id) => removeData("parent", id, setParent),
            addService: (newService) => addData("services", newService, setServices),
            removeService: (id) => removeData("services", id, setServices),
            addBlog: (newBlog) => addData("blogs", newBlog, setBlogs),
            removeBlog: (id) => removeData("blogs", id, setBlogs),
            addCoupon: (newCoupon) => addData("coupons", newCoupon, setCoupons),
            removeCoupon: (id) => removeData("coupons", id, setCoupons),
            addNewsUpdate: (newNews) => addData("newsUpdates", newNews, setNewsUpdate),
            removeNewsUpdate: (id) => removeData("newsUpdates", id, setNewsUpdate),
            addBatch: (newBatch) => addData("batches", newBatch, setBatches),
            removeBatch: (id) => removeData("batches", id, setBatches),
            addReview: (newReview) => addData("reviews", newReview, setReviews),
            removeReview: (id) => removeData("reviews", id, setReviews),
            setFall,setParent,setServices,setBlogs,setCoupons,setNewsUpdate,setBatches,setReviews
        }}>
            {children}
        </DataContext.Provider>
    );
};

// Custom hook for consuming context
export const useData = () => useContext(DataContext);
