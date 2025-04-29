import React from "react";
import Container from "../component/Container";
import Main from "../component/Main";
import SideBar from "../component/SideBar";

function Home() {
  return (
    <div className="bg-gray-200">
      <Container>
        <div className="flex flex-col md:flex-row pt-2 gap-3">
          <div className="md:flex-[4] w-full">
            <Main />
          </div>
          <div className="md:flex-[1] w-full">
            <SideBar />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Home;
