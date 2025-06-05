// This file provides mock AI responses for the study buddy
// In a real application, this would be replaced with actual AI API calls

const mathResponses = [
  "Looking at this math problem, I'll walk you through the steps. First, we need to identify the variables and what's being asked.",
  "For this equation, we can apply the quadratic formula: x = (-b ± √(b² - 4ac)) / 2a. Let's substitute the values and solve step-by-step.",
  "To solve this geometry problem, let's start by drawing a diagram and labeling all the given measurements.",
  "When working with calculus problems, remember that integration is the opposite of differentiation. Let's apply that concept here.",
];

const scienceResponses = [
  "This biology concept relates to cellular respiration. The process occurs in the mitochondria and produces ATP through several stages.",
  "In chemistry, we can understand this reaction by looking at the electron transfer. Let's analyze the oxidation and reduction components.",
  "For this physics problem, we'll apply Newton's Second Law: F = ma. Given the force and mass, we can calculate the acceleration.",
  "When studying genetics, Punnett squares help us predict the probability of specific traits appearing in offspring.",
];

const writingResponses = [
  "Your essay could be strengthened by clarifying your thesis statement. I suggest making it more specific by...",
  "When writing a research paper, it's important to properly cite your sources. Based on your requirements, let me show you the correct format.",
  "To improve this paragraph, consider adding transitional phrases between your ideas to create better flow.",
  "Your narrative is engaging, but you might want to add more sensory details to really bring the scene to life for your readers.",
];

const historyResponses = [
  "This historical event was influenced by several economic and social factors of the time period. Let's examine each one.",
  "When analyzing this primary source document, consider the author's background and potential biases that might affect their perspective.",
  "The impact of this historical figure can be understood by examining both their immediate actions and the long-term consequences.",
  "This timeline helps us understand how these events are connected. Notice how each development builds upon previous ones.",
];

const generalResponses = [
  "That's an interesting question! Let me help you understand this concept more clearly.",
  "I can definitely help you with this. Let's break it down into manageable steps.",
  "Great question! This topic connects to several important concepts. Let me explain how they relate.",
  "I'd be happy to help you understand this better. Let's start with the fundamentals and then move to more complex aspects.",
];

export const generateMockResponse = (userMessage: string, subject: string): string => {
  // Simple response selection based on subject
  let responses: string[] = generalResponses;
  
  switch(subject) {
    case 'math':
      responses = mathResponses;
      break;
    case 'science':
      responses = scienceResponses;
      break;
    case 'history':
      responses = historyResponses;
      break;
    case 'language':
      responses = writingResponses;
      break;
    default:
      responses = generalResponses;
  }
  
  // Select a random response from the appropriate category
  const randomIndex = Math.floor(Math.random() * responses.length);
  
  // Add some customization based on user message
  const userKeywords = userMessage.toLowerCase();
  let customizedResponse = responses[randomIndex];
  
  if (userKeywords.includes('help') || userKeywords.includes('don\'t understand')) {
    customizedResponse = "I understand this might be challenging. Let's take it step by step. " + customizedResponse;
  }
  
  if (userKeywords.includes('example')) {
    customizedResponse += " Here's an example to illustrate this concept better: [specific example relevant to the subject would be provided here].";
  }
  
  if (userKeywords.includes('why')) {
    customizedResponse += " Understanding the 'why' behind this is crucial. It's because [explanation of underlying principles would be provided here].";
  }
  
  return customizedResponse;
};