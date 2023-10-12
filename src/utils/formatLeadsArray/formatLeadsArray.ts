import { LeadDto } from 'data/leads/dto';

export const getLeadsFromLast24h = (leadsArr: LeadDto[]) => {
   const currDate = new Date().getTime();
   const twentyFourHAgo = currDate - 24 * 60 * 60 * 1000;
   return leadsArr.filter((lead) => new Date(lead.createdAt).getTime() >= twentyFourHAgo);
};

export const sortLeadsByCreatedAtDesc = (leadsArr: LeadDto[]) => {
   return leadsArr.sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
   );
};

export const formatLeadsArray = (leadsArr: LeadDto[]) => {
   const filteredLeads = getLeadsFromLast24h(leadsArr);
   const sortedLeadsDesc = sortLeadsByCreatedAtDesc(filteredLeads);

   return sortedLeadsDesc;
};
