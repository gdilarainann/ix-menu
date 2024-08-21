import { IxMenu, IxMenuItem } from '@siemens/ix-react';
import React from 'react';
function App() {
  return (
    <div className="App">
      <IxMenu>
        <IxMenuItem home tab-icon="home">
          Home
        </IxMenuItem>
        <IxMenuItem tab-icon="globe"> Normal Tab </IxMenuItem>
        <IxMenuItem tab-icon="/src/5g.svg"  icon={'/src/5g.svg'}>
          Disabled Tab
        </IxMenuItem>
        <IxMenuItem tab-icon="star"> With other Icon </IxMenuItem>
        <IxMenuItem tab-icon="globe" style={{ display: 'none' }}>
          Should not visible
        </IxMenuItem>
      </IxMenu>
    </div>
  );
}

export default App;
