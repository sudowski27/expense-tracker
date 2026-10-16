import React from "react";
import DashboardLayout from "../../components/layouts/DashboardLayout";
import { useUserAuth } from "../../hooks/useUserAuth";
import { useNavigate } from "react-router-dom";

const Home = () => {
    useUserAuth();

    const navigate = useNavigate();

    const [dashboardData, setDashboardData] = setState(null);
    const [loading, setLoading] = setState(false);

    const fetchDashboardData = async => {
        if (loading) return;

        setLoading(true);
    }

    return (
        <DashboardLayout activeMenu="Dashboard">
            <div className="my-5 mx-auto"></div>
        </DashboardLayout>
    )
}

export default Home