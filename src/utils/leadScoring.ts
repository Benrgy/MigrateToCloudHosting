interface LeadScoringInputs {
  visitors: number;
  currentCost: number;
  website: string;
  currentHost: string;
  lostRevenue: number;
  potentialYearlySavings: number;
}

export const calculateLeadScore = (inputs: LeadScoringInputs): number => {
  let score = 0;

  // Base score based on monthly visitors (higher traffic = higher potential)
  if (inputs.visitors >= 100000) score += 25;
  else if (inputs.visitors >= 50000) score += 20;
  else if (inputs.visitors >= 10000) score += 15;
  else if (inputs.visitors >= 5000) score += 10;
  else if (inputs.visitors >= 1000) score += 5;

  // Score based on potential monthly lost revenue
  if (inputs.lostRevenue >= 5000) score += 25;
  else if (inputs.lostRevenue >= 2000) score += 20;
  else if (inputs.lostRevenue >= 1000) score += 15;
  else if (inputs.lostRevenue >= 500) score += 10;
  else if (inputs.lostRevenue >= 100) score += 5;

  // Score based on current hosting cost (higher cost = more budget available)
  if (inputs.currentCost >= 200) score += 15;
  else if (inputs.currentCost >= 100) score += 12;
  else if (inputs.currentCost >= 50) score += 10;
  else if (inputs.currentCost >= 20) score += 8;
  else if (inputs.currentCost >= 10) score += 5;

  // Bonus for yearly savings potential
  if (inputs.potentialYearlySavings >= 50000) score += 15;
  else if (inputs.potentialYearlySavings >= 20000) score += 12;
  else if (inputs.potentialYearlySavings >= 10000) score += 10;
  else if (inputs.potentialYearlySavings >= 5000) score += 8;

  // Bonus points for known hosting providers that typically have performance issues
  const lowPerformanceHosts = [
    'godaddy', 'bluehost', 'hostgator', 'namecheap', 'dreamhost', 
    'hostmonster', 'justhost', 'ipage', 'fatcow', 'arvixe'
  ];
  
  const hostLower = inputs.currentHost.toLowerCase();
  if (lowPerformanceHosts.some(host => hostLower.includes(host))) {
    score += 10;
  }

  // Website quality indicator (proper domain vs free hosting)
  if (inputs.website.includes('.com') || inputs.website.includes('.org') || inputs.website.includes('.net')) {
    score += 5;
  }

  return Math.min(100, Math.max(0, score)); // Cap between 0-100
};