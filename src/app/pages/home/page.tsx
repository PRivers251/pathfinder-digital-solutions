import HeroSection from './components/sections/hero_section';
import ProblemSection from './components/sections/problem_section';

export default function HomePage() {
    return(
        <>
        <HeroSection />
        
        <main>
          <ProblemSection /> 
        </main>
        </>
    )
}