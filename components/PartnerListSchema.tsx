import React from 'react';


interface OrganizationSchemaProps {
    organizationName: string;
    description: string;
    
    phone?: string;
    addressState?: string;
    type?: string; 
}

export const OrganizationSchema: React.FC<OrganizationSchemaProps> = ({
  organizationName,
  description,
  phone,
  addressState,
  type = "Organization", 
}) => {

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": type,
    "name": organizationName,
    "description": description,
    
    
    ...(phone && { 
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": phone,
            "contactType": "Geral"
        }
    }),
    
   
    ...(addressState && {
        "address": {
            "@type": "PostalAddress",
            "addressRegion": addressState,
            
        }
    }),
    
   
  };

  return (
   
    <script
      id={`organization-schema-${organizationName.replace(/\s/g, '-')}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
    />
  );
};
