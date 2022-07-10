import * as React from 'react'
import {
  MdOutlineFormatListBulleted,
  MdOutlineHistory,
  MdInsertChartOutlined,
} from 'react-icons/md'
import * as Tooltip from '@radix-ui/react-tooltip'

interface TabsProps {}

enum tabEnum {
  First = 0,
  Second,
  Third,
}

export default function Tabs({}: TabsProps) {
  const [activeTab, setActiveTab] = React.useState<tabEnum>(0)

  return (
    <div className="flex flex-col items-center gap-y-[70px]">
      {initialTabs.map((tab, idx) => (
        <Tooltip.Provider delayDuration={0} key={tab.name}>
          <Tooltip.Root>
            <Tooltip.Trigger>
              <div
                className={
                  activeTab === idx ? `border-l-[6px] border-[#F9A109]` : ``
                }
                onClick={() => setActiveTab(idx)}
              >
                {tab.logo}
              </div>
            </Tooltip.Trigger>
            <Tooltip.Content side="right" sideOffset={20}>
              <Tooltip.Arrow
                width={10}
                height={8}
                style={{
                  filter:
                    'invert(25%) sepia(0%) saturate(0%) hue-rotate(32deg) brightness(95%) contrast(88%)',
                }}
              />
              <div className="bg-[#454545] text-white h-[21px] w-[65px] text-center align-middle rounded-[4px]">
                <p className="text-[12px] font-[500]">{tab.name}</p>
              </div>
            </Tooltip.Content>
          </Tooltip.Root>
        </Tooltip.Provider>
      ))}
    </div>
  )
}

const iconStyles = {
  filter:
    'invert(25%) sepia(0%) saturate(0%) hue-rotate(32deg) brightness(95%) contrast(88%)',
  width: '25px',
  height: '25px',
}

const initialTabs = [
  {
    name: 'items',
    logo: <MdOutlineFormatListBulleted style={iconStyles} />,
    active: true,
  },
  {
    name: 'history',
    logo: <MdOutlineHistory style={iconStyles} />,
    active: false,
  },
  {
    name: 'statistics',
    logo: <MdInsertChartOutlined style={iconStyles} />,
    active: false,
  },
]
