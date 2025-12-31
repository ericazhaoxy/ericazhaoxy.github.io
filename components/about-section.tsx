export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 md:pb-100 lg:pb-48 px-4 md:px-8 bg-gradient-to-b from-background to-purple-950/10 rounded-xl my-12">
      <div className="max-w-3xl mx-auto text-left">
        <h2 className="text-4xl font-bold mb-6 text-gradient bg-gradient-to-r from-teal-400 via-purple-400 to-pink-400 bg-clip-text text-transparent text-left">
          About Me
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-6">
          Hi, I'm Erica Zhao — a Machine Learning Engineer focused on LLMs evaluation and applied AI for real user workflows. I build end-to-end ML/AI solutions from data pipelines to model iteration, and I love turning ambiguous problems into reliable, measurable systems.

        </p>
        <p className="text-base md:text-lg text-muted-foreground mb-4">
          Recently, I've been building LLM-powered features for education workflows—designing prompts and rubrics, enforcing structured outputs, and running evaluations to improve quality, consistency, and user trust. I'm especially interested in applied GenAI where product goals and measurable model behavior meet.
        </p>
        
        <p className="text-base md:text-lg text-muted-foreground">
          Let's connect if you'd like to collaborate, discuss technology, or just say hello!
        </p>
      </div>
    </section>
  )
}