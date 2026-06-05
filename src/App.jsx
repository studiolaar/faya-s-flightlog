import BoardingPass from './components/BoardingPass'

export default function App() {
  return (
    /* min-h-screen keeps the bg gradient full height even on short content */
    <div className="min-h-screen w-full py-8 px-4 flex justify-center">
      {/* On desktop the card centres with extra horizontal breathing room */}
      <div className="w-full max-w-[420px] lg:max-w-[480px]">
        <BoardingPass />
      </div>
    </div>
  )
}
