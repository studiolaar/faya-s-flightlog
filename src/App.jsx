import BoardingPass from './components/BoardingPass'

export default function App() {
  return (
    /* min-h-screen keeps the bg gradient full height even on short content */
    <div className="min-h-screen w-full py-6 sm:py-10 px-4 flex justify-center">
      {/* Fixed background image behind everything; ticket holes reveal it */}
      <div className="app-bg" aria-hidden />
      {/* BoardingPass scales itself fluidly; this just provides centering + padding */}
      <div className="w-full" style={{ maxWidth: 720 }}>
        <BoardingPass />
      </div>
    </div>
  )
}
