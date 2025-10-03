"use client";

import DashboardAdmin from "@/app/componentes/DashboardAdmin";
import DashboardGerente from "@/app/componentes/DashboardGerente";
import DashboardTecnico from "@/app/componentes/DashboardTecnico";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function DashboardPage(){
    const router = useRouter();
    const [userRole, setUserRole] = useState<string | null>(null);

    useEffect(()=>{
        const role = localStorage.getItem("userRole");
        if(!role) {
            router.push("/login");//redireciona para o login caso perca a userRole
        }else{
            setUserRole(role);
        }
    }, [router]);

    const handleLogout = async () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userRole");
        router.push("/login");
    };

    const renderDashboard = () => {
        if( userRole?.toLowerCase() === "admin"){
            return <DashboardAdmin />;
        } else if (userRole === "gerente"){
            return <DashboardGerente />;
        } else if (userRole === "tecnico"){
            return <DashboardTecnico/>;
        }
    };

    return (
        <div>
            <header className={styles.header}>
                <h1>Bem-Vindo</h1>
                <button className={styles.logoutButton} onClick={handleLogout}>Logout</button>
            </header>
            <main className={styles.main}>
                <div className={styles.dashboardContent}>
                    {renderDashboard()}
                </div>
            </main>
        </div>
    );
}
