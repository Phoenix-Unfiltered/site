export type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  emotionalTone: string;
  date: string;
  slug: string;
  featured: boolean;
  imagePath: string | null;
  inspirationSource?: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "The Messy Middle",
    excerpt: "There's beauty in the breakdown, they said. They forgot to mention the part where you feel like you're drowning in your own thoughts.",
    content: "Full content of the messy middle post would go here...",
    category: "Fire",
    emotionalTone: "Raw",
    date: "April 12, 2025",
    slug: "the-messy-middle",
    featured: true,
    imagePath: null,
  },
  {
    id: 2,
    title: "Rebuilding, Barefoot",
    excerpt: "Sometimes you have to walk through the broken glass to get to the other side. And yes, it's going to hurt.",
    content: "Full content of rebuilding barefoot post would go here...",
    category: "Rebuild",
    emotionalTone: "Resilient",
    date: "April 5, 2025",
    slug: "rebuilding-barefoot",
    featured: false,
    imagePath: null,
  },
  {
    id: 3,
    title: "Chased by Cheetahs & Choices",
    excerpt: "When a wildlife encounter becomes the perfect metaphor for running from yourself.",
    content: "Full content of chased by cheetahs post would go here...",
    category: "Rise",
    emotionalTone: "Contemplative",
    date: "March 29, 2025",
    slug: "chased-by-cheetahs",
    featured: false,
    imagePath: null,
  },
  {
    id: 4,
    title: "Survival Mode Isn't Living",
    excerpt: "I've spent years convincing myself that keeping people at a distance is the safest option. Not because I enjoy loneliness, but because I've learned that nothing good lasts forever.",
    content: `
      <p>I've spent years convincing myself that keeping people at a distance is the safest option. Not because I enjoy loneliness, but because I've learned that nothing good lasts forever. If you never let anyone in, they can't leave. If you expect disappointment, it stings less when it happens. If you keep moving, keep surviving, keep bracing for impact - you don't have to deal with the wreckage.</p>
      
      <p>The problem is, that's not living. It's just avoiding the inevitable.</p>
      
      <h3>The Cycle of Self-Sabotage</h3>
      
      <p>Somewhere along the way, I became fluent in pushing people away. I don't even have to try - it's second nature. I assume the worst, question sincerity, and search for proof that people are getting tired of me before they even have the chance to be. And if I don't find the proof? I create it. Because it's easier to destroy something myself than to watch it fall apart unexpectedly.</p>
      
      <p>I overanalyze silence, turn kindness into obligation, and convince myself that patience is just politeness in disguise. I make it impossible for people to stay, then call it fate when they leave.</p>
      
      <p>The irony is, I hate this about myself. But hating it doesn't stop the pattern.</p>
      
      <p>Have you ever caught yourself sabotaging something good before it even had a chance? If so, did you stop yourself, or did you watch it unravel like you expected it to?</p>
      
      <h3>What Survival Steals From You</h3>
      
      <p>Survival mode gets the job done - it keeps you functioning, keeps you armored, keeps you from falling apart completely. But it also keeps you from connection, from trust, from the simple act of believing that not everyone is a threat.</p>
      
      <p>Survival mode makes you question good things instead of enjoying them. It makes you think love is something to be earned, rather than something freely given. It turns you into your own worst enemy, whispering that you're too much, too complicated, too exhausting for anyone to truly stay.</p>
      
      <p>But that's a lie. One that's hard to unlearn, but a lie nonetheless.</p>
      
      <p>How do you know when you're in survival mode? What are the signs that tell you you're just getting through the day rather than actually living?</p>
      
      <h3>Choosing Something Different</h3>
      
      <p>The truth is, people will leave. Not everyone is meant to stay. Some will walk away because they don't understand. Some won't have the patience. And some will leave because I push them so hard that they have no choice.</p>
      
      <p>But some people will stay. Not because they have to. Not because they feel sorry for me. But because they want to.</p>
      
      <p>And maybe, just maybe, it's time I let them.</p>
      
      <p>Do you let people stay, or do you keep them at arm's length out of fear? What would happen if, just once, you believed that someone meant it when they said they weren't going anywhere?</p>
      
      <p>Let's talk. Drop your thoughts in the comments below. ⬇️</p>
    `,
    category: "Rise",
    emotionalTone: "Vulnerable",
    date: "April 17, 2025",
    slug: "survival-mode-isnt-living",
    featured: true,
    imagePath: "/lovable-uploads/3d24eee4-f735-4549-9998-43476f82a080.png",
    inspirationSource: "Inspired by momentary_existentialism on Instagram"
  },
  {
    id: 8,
    title: "Why Excessive Empathy is Not Always the Hero We Think It Is",
    excerpt: "Empathy - that beautiful, magical ability to feel and understand another person's emotions as if they were your own. It can be a superpower in relationships, in leadership, in helping others. But have you ever wondered if too much empathy could be doing more harm than good?",
    content: `
      <p>Empathy - that beautiful, magical ability to feel and understand another person's emotions as if they were your own. It can be a superpower in relationships, in leadership, in helping others.</p>

      <p>But have you ever wondered if too much empathy could be doing more harm than good?</p>

      <p>Trust me, I've been there.</p>

      <h3>When Empathy Becomes a Double-Edged Sword</h3>

      <p>I've always been the type who feels deeply. Someone cries, and I feel it in my gut. Someone's hurting, I'm already halfway to fixing it. Sounds noble, right? Except it's not. Not when it starts costing you parts of yourself.</p>

      <p>There was a time in my life when my brother was spiraling. Manipulative, emotionally volatile, and constantly wrapped in some crisis or another. And me? I was the loyal fixer, the unofficial therapist, the emotional sponge. I was so busy mopping up his messes that I didn't see how much of my own stability was circling the drain.</p>

      <p>I thought, "If I don't carry this for him, who the hell will?"</p>

      <p>But here's the kicker; I wasn't helping him. I was enabling him. And I was abandoning myself in the process.</p>

      <p>My empathy became a leash. It was no longer a tool for connection; it was a trap.</p>

      <h3>The Dangers of Over-Extending Your Empathy</h3>

      <p>Excessive empathy doesn't just make you a martyr, it chips away at your own mental health. And it happens slowly, like erosion. Here's how it hit me:</p>

      <p><strong>Emotional Drain:</strong> Every call, every drama, every meltdown left me exhausted. Not the "whew, that was intense" kind, I'm talking soul-tired. Like I'd run an emotional marathon barefoot, through hell.</p>

      <p><strong>Loss of Boundaries:</strong> I stopped knowing where his emotions ended and mine began. If he was anxious, I was pacing. If he was angry, I was seething. I wasn't living my life, I was living a reaction to his.</p>

      <p><strong>Neglecting My Own Needs:</strong> While I played Florence Nightingale for someone who didn't want to heal, I ignored my own warning signs, the exhaustion, the resentment, the need for me to be okay.</p>

      <p><strong>Unhealthy Expectations:</strong> And of course, once people know you'll always catch them, they stop learning how to land. I was the emotional crash pad, and damn if it didn't hurt when I realized that wasn't love, it was dependency.</p>

      <h3>How to Catch Yourself in the Act of Over-Empathizing</h3>

      <p>Here's the litmus test I wish I'd had years ago. Ask yourself:</p>

      <p>🔹 <strong>Are You Feeling Exhausted?</strong></p>
      <p>Do you feel like you've been wrung out after a conversation? That's not empathy, that's a red flag.</p>

      <p>🔹 <strong>Do You Feel Responsible for Their Emotions?</strong></p>
      <p>If you're carrying their grief, their rage, their chaos like it's yours, it's time to draw a line.</p>

      <p>🔹 <strong>Do You Feel Resentful?</strong></p>
      <p>If helping someone feels like a burden instead of a choice, that's not love, that's a trap.</p>

      <p>🔹 <strong>Are You Ignoring Your Own Needs?</strong></p>
      <p>When was the last time you had someone show up for you the way you do for them?</p>

      <h3>The Healing Power of Balance: How to Be Empathetic Without Losing Yourself</h3>

      <p>Empathy isn't about carrying someone's pain for them. It's about witnessing it, holding space, not becoming their emotional beast of burden. Here's how I clawed my way back:</p>

      <p>✅ <strong>Set Boundaries:</strong> You're allowed to say, "I love you, but I can't carry this for you." Saying no isn't cruel; it's survival.</p>

      <p>✅ <strong>Practice Self-Care (Real Self-Care):</strong> Not bubble baths and wine, I'm talking quiet. Rest. Therapy. Reflection. Saying "I matter too."</p>

      <p>✅ <strong>Empower, Don't Enable:</strong> Stop fixing. Start listening. Let people sit in their discomfort long enough to grow.</p>

      <p>✅ <strong>Check Your Motivation:</strong> Be honest. Are you being empathetic because you care, or because avoiding your own pain is easier when you're drowning in someone else's?</p>

      <h3>Let's Talk: When Was the Last Time You Caught Yourself Being Overly Empathetic?</h3>

      <p>If this feels like your life in a nutshell, welcome to the club. The goal isn't to stop caring. It's to start caring in a way that includes yourself.</p>

      <p>So, next time you feel that tug, that urge to dive headfirst into someone else's chaos, ask yourself, "Am I helping, or am I disappearing?"</p>

      <p>Empathy is a gift. But it's not a gift if it leaves you empty.</p>

      <p>Now it's your turn, when has empathy empowered you, and when has it bled you dry?</p>

      <p>Let's talk.</p>
    `,
    category: "Information Station",
    emotionalTone: "Reflective",
    date: "April 18, 2025",
    slug: "excessive-empathy",
    featured: false,
  },
];
