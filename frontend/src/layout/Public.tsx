import { ReactNode } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Box } from "@mantine/core";

import { LandingFooter, LandingNavbar } from "../components";
import footerLinksData from "../data/Footer.json";

interface IProps {
  children?: ReactNode;
  compressedNav?: boolean;
}

const AssistanceButton = () => {
  const navigate = useNavigate();

  return (
    <button
      id="assistance-btn"
      onClick={() => navigate("/chatbot")}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#004d61",
        color: "#fff",
        border: "none",
        borderRadius: "50%",
        width: "50px",
        height: "50px",
        fontSize: "24px",
        cursor: "pointer",
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)"
      }}
      aria-label="Assistance"
    >
      🤖
    </button>
  );
};

const PublicLayout = ({ compressedNav }: IProps) => {
  return (
    <>
      <LandingNavbar compressed={compressedNav} />
      <Box sx={{ marginTop: compressedNav ? 0 : 96 }}>
        <Outlet />
        <AssistanceButton />
      </Box>
      <LandingFooter data={footerLinksData.data} />
    </>
  );
};

export default PublicLayout;
