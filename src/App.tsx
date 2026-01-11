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
} from '@oxymormon/chg-unified-ds'

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

        {/* Brand Dropdown */}
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

      {/* About Section */}
      <section className="bg-gray-50 rounded-12 p-16 space-y-12">
        <p className="text-gray-700">
          Design System Test is a web app built with components from the <strong>CHG Unified Design System</strong>,
          a multi-brand React component library built with React Aria Components and Tailwind CSS 4.
        </p>
        <p className="text-gray-700 pb-12">
          All components are imported from the public npm package and support runtime theme switching
          via the <code className="bg-gray-200 px-4 py-2 rounded-4 text-sm">data-theme</code> attribute.
        </p>
        <div className="flex flex-wrap gap-8">
          <Button
            variant="primary"
            size="sm"
            href="https://github.com/jordanchghealthcare/chg-unified-ds"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="flex items-center gap-6">
              <svg className="size-16" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
              </svg>
              GitHub Repository
            </span>
          </Button>
          <Button
            variant="outline"
            size="sm"
            href="https://www.npmjs.com/package/@oxymormon/chg-unified-ds"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="flex items-center gap-6">
              <svg className="size-16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M0 7.334v8h6.666v1.332H12v-1.332h12v-8H0zm6.666 6.664H5.334v-4H3.999v4H1.335V8.667h5.331v5.331zm4 0v1.336H8.001V8.667h5.334v5.332h-2.669v-.001zm12.001 0h-1.33v-4h-1.336v4h-1.335v-4h-1.33v4h-2.671V8.667h8.002v5.331zM10.665 10H12v2.667h-1.335V10z" />
              </svg>
              npm Package
            </span>
          </Button>
        </div>
      </section>

      <Divider />

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
