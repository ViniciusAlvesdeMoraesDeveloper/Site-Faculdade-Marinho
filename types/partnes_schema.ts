
export interface PartnerOrganization {
  name: string;
  url: string;
  
  logoUrl?: string; 
}


export interface PartnersListSchemaProps {
  pageUrl: string; 
  partners: PartnerOrganization[];
}
