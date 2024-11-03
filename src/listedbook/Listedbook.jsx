import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Listedbook = () => {
  return (
    <div className="text-3xl my-8">
      <Tabs>
        <TabList>
          <Tab>Read List </Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-2xl">Books I read </h2>
        </TabPanel>
        <TabPanel>
          <h2 className="text-2xl">My wish list </h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Listedbook;
