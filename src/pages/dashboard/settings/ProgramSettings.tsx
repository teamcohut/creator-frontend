import { Tabs, TabsProps } from 'antd';
import CohortSettings from './CohortSettings';
import ProgramGeneralSettings from './ProgramGeneralSettings';

const ProgramSettings = () => {
  const onChange = (key: string) => {
    console.log(`Active Tab Key: ${key}`);
  };

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Cohort',
      children: <CohortSettings />,
    },
    {
      key: '2',
      label: 'General',
      children: <ProgramGeneralSettings />,
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
