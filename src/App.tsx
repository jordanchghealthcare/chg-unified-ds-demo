import { useState, useRef, useEffect } from 'react'
import {
  Button,
  Avatar,
  Tag,
  Toggle,
  ProgressBar,
  Chip,
  Divider,
  Radio,
  RadioGroup,
  Tabs,
  Accordion,
  AccordionItem,
  Status,
  CounterBadge,
  StepIndicator,
  DotStatus,
  ActionMenu,
} from '@jordanchghealthcare/chg-unified-ds'

function App() {
  const [toggleOn, setToggleOn] = useState(true)
  const [selectedRadio, setSelectedRadio] = useState('option1')
  const [selectedChip, setSelectedChip] = useState('chip1')
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [selectedTheme, setSelectedTheme] = useState('weatherby')
  const dropdownRef = useRef<HTMLDivElement>(null)

  const brands = [
    { id: 'weatherby', label: 'Weatherby', color: '#a9174a' },
    { id: 'comphealth', label: 'CompHealth', color: '#5e4775' },
    { id: 'connect', label: 'Connect', color: '#0093d4' },
    { id: 'locumsmart', label: 'LocumSmart', color: '#008dcf' },
    { id: 'modio', label: 'Modio', color: '#2c91b6' },
    { id: 'wireframe', label: 'Wireframe', color: '#818181' },
  ]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const tabItems = [
    { id: 'tab1', label: 'Overview', content: <p className="text-gray-600">This is the overview tab content.</p> },
    { id: 'tab2', label: 'Details', content: <p className="text-gray-600">This is the details tab content.</p> },
    { id: 'tab3', label: 'Settings', content: <p className="text-gray-600">This is the settings tab content.</p> },
  ]

  return (
    <div data-theme={selectedTheme} className="p-16 flex flex-col gap-24 bg-base-white min-h-screen max-w-4xl mx-auto">
      {/* Header with dropdown */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Design System Test</h1>

        {/* Custom Dropdown */}
        <div ref={dropdownRef} className="relative">
          <Button
            variant="outline"
            size="md"
            onPress={() => setDropdownOpen(!dropdownOpen)}
          >
            <span className="flex items-center gap-8">
              <span
                className="size-8 rounded-full shrink-0"
                style={{ backgroundColor: brands.find(b => b.id === selectedTheme)?.color }}
              />
              {brands.find(b => b.id === selectedTheme)?.label}
              <svg
                className={`w-4 h-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </Button>

          {dropdownOpen && (
            <ActionMenu
              className="absolute right-0 mt-2 min-w-48 z-50"
              onItemClick={(value) => {
                if (value) setSelectedTheme(value)
                setDropdownOpen(false)
              }}
            >
              {brands.map((brand) => (
                <ActionMenu.Item key={brand.id} value={brand.id}>
                  <span className="flex items-center gap-8">
                    <span
                      className="size-8 rounded-full shrink-0"
                      style={{ backgroundColor: brand.color }}
                    />
                    {brand.label}
                  </span>
                </ActionMenu.Item>
              ))}
            </ActionMenu>
          )}
        </div>
      </div>

      {/* Buttons */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="primary" size="md">Primary</Button>
          <Button variant="soft" size="md">Soft</Button>
          <Button variant="outline" size="md">Outline</Button>
          <Button variant="ghost" size="md">Ghost</Button>
          <Button variant="destructive" size="md">Destructive</Button>
        </div>
      </section>

      <Divider />

      {/* Avatars */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Avatars</h2>
        <div className="flex gap-8 items-center">
          <Avatar size="sm" name="John Doe" initials="JD" />
          <Avatar size="md" name="Alice Brown" initials="AB" status="online" />
          <Avatar size="lg" name="Xavier Young" initials="XY" status="busy" />
        </div>
      </section>

      <Divider />

      {/* Tags & Badges */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Tags & Badges</h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Tag color="neutral">Neutral</Tag>
          <Tag color="blue">Blue</Tag>
          <Tag color="red">Red</Tag>
          <Tag color="green">Green</Tag>
          <Tag color="yellow">Yellow</Tag>
          <Tag color="purple">Purple</Tag>
        </div>
        <div className="flex gap-4 items-center">
          <CounterBadge color="red" isSolid>3</CounterBadge>
          <CounterBadge color="blue">12</CounterBadge>
          <CounterBadge color="green" isSolid>99+</CounterBadge>
        </div>
      </section>

      <Divider />

      {/* Status Indicators */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Status Indicators</h2>
        <div className="flex flex-wrap gap-8 items-center">
          <Status appearance="green">Online</Status>
          <Status appearance="yellow">Away</Status>
          <Status appearance="red">Busy</Status>
          <Status appearance="neutral">Offline</Status>
        </div>
        <div className="flex gap-4 items-center">
          <DotStatus appearance="green" size="default" />
          <DotStatus appearance="yellow" size="default" />
          <DotStatus appearance="red" size="default" />
          <DotStatus appearance="blue" size="default" />
        </div>
      </section>

      <Divider />

      {/* Toggle */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Toggle</h2>
        <div className="flex items-center gap-4">
          <Toggle isSelected={toggleOn} onChange={setToggleOn} />
          <span className="text-gray-600">{toggleOn ? 'On' : 'Off'}</span>
        </div>
      </section>

      <Divider />

      {/* Progress Bar */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Progress Bar</h2>
        <div className="space-y-4 max-w-md">
          <ProgressBar value={25} label="right" />
          <ProgressBar value={50} label="right" />
          <ProgressBar value={75} label="right" />
        </div>
      </section>

      <Divider />

      {/* Chips */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Chips</h2>
        <div className="flex flex-wrap gap-4">
          <Chip isSelected={selectedChip === 'chip1'} onPress={() => setSelectedChip('chip1')}>Option 1</Chip>
          <Chip isSelected={selectedChip === 'chip2'} onPress={() => setSelectedChip('chip2')}>Option 2</Chip>
          <Chip isSelected={selectedChip === 'chip3'} onPress={() => setSelectedChip('chip3')}>Option 3</Chip>
          <Chip isDismissible onDismiss={() => console.log('dismissed')}>Dismissible</Chip>
        </div>
      </section>

      <Divider />

      {/* Radio Group */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Radio Group</h2>
        <RadioGroup value={selectedRadio} onChange={setSelectedRadio}>
          <div className="flex gap-6">
            <Radio value="option1">Option 1</Radio>
            <Radio value="option2">Option 2</Radio>
            <Radio value="option3">Option 3</Radio>
          </div>
        </RadioGroup>
      </section>

      <Divider />

      {/* Step Indicator */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Step Indicator</h2>
        <StepIndicator orientation="horizontal">
          <StepIndicator.Item status="complete" label="Account" />
          <StepIndicator.Item status="active" label="Profile" />
          <StepIndicator.Item status="incomplete" label="Review" />
        </StepIndicator>
      </section>

      <Divider />

      {/* Tabs */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Tabs</h2>
        <Tabs items={tabItems} appearance="underline" />
      </section>

      <Divider />

      {/* Accordion */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Accordion</h2>
        <Accordion>
          <AccordionItem title="Section 1">
            <p className="text-gray-600 px-16">This is the content for section 1. It can contain any elements.</p>
          </AccordionItem>
          <AccordionItem title="Section 2">
            <p className="text-gray-600 px-16">This is the content for section 2. Accordions are great for FAQs.</p>
          </AccordionItem>
          <AccordionItem title="Section 3">
            <p className="text-gray-600 px-16">This is the content for section 3. They help organize information.</p>
          </AccordionItem>
        </Accordion>
      </section>

      <Divider />

      <p className="text-gray-500 text-center text-sm">
        CHG Unified Design System Components
      </p>
    </div>
  )
}

export default App
