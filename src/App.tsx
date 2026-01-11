import { Button, Avatar, Tag } from '@jordanchghealthcare/chg-unified-ds'

function App() {
  return (
    <div data-theme="weatherby" className="p-32 flex flex-col gap-32 items-center bg-base-white min-h-screen">
      <h1 className="text-3xl font-bold text-gray-900">Design System Test</h1>

      <div className="flex gap-16">
        <Button variant="primary" size="md">Primary Button</Button>
        <Button variant="soft" size="md">Soft Button</Button>
        <Button variant="outline" size="md">Outline Button</Button>
      </div>

      <div className="flex gap-16 items-center">
        <Avatar size="sm" name="John Doe" initials="JD" />
        <Avatar size="md" name="Alice Brown" initials="AB" />
        <Avatar size="lg" name="Xavier Young" initials="XY" />
      </div>

      <div className="flex gap-8">
        <Tag color="neutral">Neutral</Tag>
        <Tag color="blue">Blue</Tag>
        <Tag color="red">Red</Tag>
        <Tag color="green">Green</Tag>
      </div>

      <p className="text-gray-500">
        Package installed from GitHub Packages!
      </p>
    </div>
  )
}

export default App
