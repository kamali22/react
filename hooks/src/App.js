import React from "react";
import WithoutCleanUp from "./WithoutCleanUp";
import WithCleanUp from "./WithCleanUp";
import Counter from "./Counter";
import CustomHook from "./CustomHook";

class App extends React.Component {
    render() {
        return (
            <div>
                <WithoutCleanUp />
                <WithCleanUp />
                <div>
                    <Counter initialCount={1} />
                </div>
                <CustomHook />
            </div>
        );
    }
  }
  
  export default App;