import { Tabs, TabsProps } from 'antd';
import CohortSettings from './CohortSettings';
import ProgramGeneralSettings from './ProgramGeneralSettings';
import { useContext } from 'react';
import { ProgramContext } from '../../../context/programs/ProgramContext';

const ProgramSettings = () => {
  const {activeCohort} = useContext(ProgramContext)
  const onChange = (key: string) => {
    console.log(`Active Tab Key: ${key}`);
  };

  const items: TabsProps['items'] = [
      {
        key: '1',
        label: 'General',
        children: <ProgramGeneralSettings />,
      },
      {
      key: '2',
      label: 'Cohort',
      children: <CohortSettings />,
      disabled: !activeCohort?.id,
    },
  ];
  return (
    <>
      <div className='ml-5'>
      <Tabs items={items} onChange={onChange} 
        tabBarStyle={{
          marginLeft: 80, // Padding applied to tabs only
        }}
        animated={{
          tabPane: true, // Enable tab pane animation
        }}
        className="custom-tabs"
      />
      </div>
    </>
  )
}

export default ProgramSettings
