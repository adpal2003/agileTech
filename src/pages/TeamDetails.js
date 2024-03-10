import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import FooterOne from "../components/FooterOne";
import NavBar from "../components/NavBar";
import TeamDetailsGroup from "../components/TeamDetailsGroup";

const TeamDetails = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Breadcrumb */}
      <Breadcrumb title={"Team Details"} />

      {/* Team Details Group */}
      <TeamDetailsGroup />

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default TeamDetails;
