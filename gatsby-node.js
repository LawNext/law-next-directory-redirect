exports.onCreatePage = async ({ graphql, actions }) => {

  const { createRedirect } = actions;

  createRedirect({
    fromPath: ``,
    toPath: `https://directory.lawnext.com/`,
    isPermanent: true
  })

  createRedirect({
    fromPath: `'/'`,
    toPath: `https://directory.lawnext.com/`,
    isPermanent: true
  });

  createRedirect({
    fromPath: `/*`,
    toPath: `https://directory.lawnext.com/*`,
    isPermanent: true
  });
	
	createRedirect({
    fromPath: `/contracting-tech-center/`,
    toPath: `https://directory.lawnext.com/legal-technology-centers/contracting/`,
    isPermanent: true
  });
  createRedirect({
    fromPath: `/document-tech-center/`,
    toPath: `https://directory.lawnext.com/legal-technology-centers/document-technology/`,
    isPermanent: true
  });
  createRedirect({
    fromPath: `/discovery-tech-center/`,
    toPath: `https://directory.lawnext.com/legal-technology-centers/discovery/`,
    isPermanent: true
  });
  createRedirect({
    fromPath: `/expert-systems-and-decision-automation-tech-center/`,
    toPath: `https://directory.lawnext.com/legal-technology-centers/expert-systems-and-decision-automation/`,
    isPermanent: true
  });
  createRedirect({
    fromPath: `/governance-risk-compliance-tech-center/`,
    toPath: `https://directory.lawnext.com/legal-technology-centers/governance-risk-and-compliance/`,
    isPermanent: true
  });
  createRedirect({
    fromPath: `/law-department-technology-tech-center/`,
    toPath: `https://directory.lawnext.com/legal-technology-centers/law-department-technology/`,
    isPermanent: true
  });
  createRedirect({
    fromPath: `/law-practice-management-tech-center/`,
    toPath: `https://directory.lawnext.com/legal-technology-centers/law-practice-management/`,
    isPermanent: true
  });
  createRedirect({
    fromPath: `/litigation-tech-center/`,
    toPath: `https://directory.lawnext.com/legal-technology-centers/litigation/`,
    isPermanent: true
  });
  	createRedirect({
    fromPath: `/marketplaces-hiring-talent-management-tech-center/`,
    toPath: `https://directory.lawnext.com/legal-technology-centers/marketplaces-hiring-and-talent-management/`,
    isPermanent: true
  });
  	createRedirect({
    fromPath: `/miscellaneous-tech-tools-tech-center/`,
    toPath: `https://directory.lawnext.com/legal-technology-centers/miscellaneous-tech-tools/`,
    isPermanent: true
  });
  createRedirect({
    fromPath: `/practice-area-specific-technology-tech-center/`,
    toPath: `https://directory.lawnext.com/legal-technology-centers/practice-area-specific-technology/`,
    isPermanent: true
  });
  createRedirect({
    fromPath: `/specialized-law-organizations-tech-center/`,
    toPath: `https://directory.lawnext.com/legal-technology-centers/specialized-law-organizations/`,
    isPermanent: true
  });
  createRedirect({
    fromPath: `/legal-research-and-knowledge-management-tech-center/`,
    toPath: `https://directory.lawnext.com/legal-technology-centers/legal-research-and-knowledge-management/`,
    isPermanent: true
  });
  createRedirect({
    fromPath: `/transaction-management-tech-center/`,
    toPath: `https://directory.lawnext.com/legal-technology-centers/transaction-management/`,
    isPermanent: true
  });


	// All your other redirects

  createRedirect({
    fromPath: `/directory-companies/listing/5600/`,
    toPath: `https://directory.lawnext.com/products/etheia`,
    isPermanent: true
  })
  createRedirect({
    fromPath: `/directory-companies/listing/disco-ediscovery/`,
    toPath: `https://directory.lawnext.com/products/disco`,
    isPermanent: true
  })
  createRedirect({
    fromPath: `/directory-companies/listing/document-automation/`,
    toPath: `https://directory.lawnext.com/products/neota-document-automation`,
    isPermanent: true
  });
  createRedirect({
    fromPath: `/directory-companies/listing/expertise-automation/`,
    toPath: `https://directory.lawnext.com/products/neota-expertise-automation`,
    isPermanent: true
  });
  createRedirect({
    fromPath: `/directory-companies/listing/workflow-automation/`,
    toPath: `https://directory.lawnext.com/products/neota-workflow-automation`,
    isPermanent: true
  });
  createRedirect({
    fromPath: `/directory-companies/listing/nexl-client-revenue-platform`,
    toPath: `https://directory.lawnext.com/products/nexl`,
    isPermanent: true
  });
  createRedirect({
    fromPath: `/directory-companies/listing/pro-bono-software/`,
    toPath: `https://directory.lawnext.com/products/paladin`,
    isPermanent: true
  });
  createRedirect({
    fromPath: `/directory-companies/listing/equity-management-software/`,
    toPath: `https://directory.lawnext.com/products/pulley`,
    isPermanent: true
  });
  createRedirect({
    fromPath: `/directory-companies/listing/legal-data-api/`,
    toPath: `https://directory.lawnext.com/products/unicourt-legal-data-api`,
    isPermanent: true
  });
  createRedirect({
    fromPath: `/directory-companies/listing/reveal/`,
    toPath: `https://directory.lawnext.com/products/vijilent-reveal`,
    isPermanent: true
  });
  createRedirect({
    fromPath: `/directory-companies/listing/legal-skills-learning-paths-and-programs-by-write-law/`,
    toPath: `https://directory.lawnext.com/products/write-law`,
    isPermanent: true
  });
  createRedirect({
    fromPath: `/directory-companies/listing/agiloft-contract-lifecycle-management-suite/`,
    toPath: `https://directory.lawnext.com/products/agiloft`,
    isPermanent: true
  });
  createRedirect({
    fromPath: `/directory-companies/listing/alt-legal-ip-docketing-software/`,
    toPath: `https://directory.lawnext.com/products/alt-legal`,
    isPermanent: true
  });
  createRedirect({
    fromPath: `/directory-companies/listing/altaclaro-experiential-learning-platform/`,
    toPath: `https://directory.lawnext.com/products/altaclaro`,
    isPermanent: true
  });
  createRedirect({
    fromPath: `/directory-companies/listing/automated-contract-markup/`,
    toPath: `https://directory.lawnext.com/products/blackboiler`,
    isPermanent: true
  });
  createRedirect({
    fromPath: `/directory-companies/listing/canveo-e-contracting-platform/`,
    toPath: `https://directory.lawnext.com/products/canveo`,
    isPermanent: true
  });
  createRedirect({
    fromPath: `/directory-companies/listing/cognito-legal-workflow-software/`,
    toPath: `https://directory.lawnext.com/products/cognito`,
    isPermanent: true
  });
  createRedirect({
    fromPath: `/directory-companies/listing/courtroom-insight-litigation-knowledge-management/`,
    toPath: `https://directory.lawnext.com/products/courtroom-insight`,
    isPermanent: true
  });
  createRedirect({
    fromPath: `/directory-companies/listing/eie-legal-text-messaging-app/`,
    toPath: `https://directory.lawnext.com/products/eie-legal`,
    isPermanent: true
  });
  createRedirect({
    fromPath: `/directory-companies/listing/contract-intelligence-platform/`,
    toPath: `https://directory.lawnext.com/products/evisort`,
    isPermanent: true
  });
  createRedirect({
    fromPath: `/directory-companies/listing/legal-interns-on-demand/`,
    toPath: `https://directory.lawnext.com/products/law-student-connect`,
    isPermanent: true
  });
  createRedirect({
    fromPath: `/directory-companies/listing/freelance-attorneys/`,
    toPath: `https://directory.lawnext.com/products/lawclerk-remote-associates`,
    isPermanent: true
  });
  createRedirect({
    fromPath: `/directory-companies/listing/legalsense-practice-management-software-pms/`,
    toPath: `https://directory.lawnext.com/products/legalsense`,
    isPermanent: true
  });
  createRedirect({
    fromPath: `/directory-companies/listing/ai-contract-negotiation-solution`,
    toPath: `https://directory.lawnext.com/products/lexcheck`,
    isPermanent: true
  });
  createRedirect({
    fromPath: `/directory-companies/listing/ltc4-core-competency-learning-plans`,
    toPath: `https://directory.lawnext.com/products/ltc4`,
    isPermanent: true
  });
  createRedirect({
    fromPath: `/directory-companies/listing/mattersuite-enterprise-legal-management`,
    toPath: `https://directory.lawnext.com/products/mattersuite`,
    isPermanent: true
  });
  createRedirect({
    fromPath: `/directory-companies/listing/merlin-integrated-search-powered-by-sherlock`,
    toPath: `https://directory.lawnext.com/products/merlin-integrated-search`,
    isPermanent: true
  });
  createRedirect({
    fromPath: `/directory-companies/listing/naya-transaction-management-platform`,
    toPath: `https://directory.lawnext.com/products/naya`,
    isPermanent: true
  });

  createRedirect({
    fromPath: `/directory-companies/listing/epay-finance/reviews/5294/`,
    toPath: `https://directory.lawnext.com/products/epay-finance/reviews/`,
    isPermanent: true
  });

  createRedirect({
    fromPath: `/directory-companies/listing/savvyacademy-learning-management-system/reviews/5458/`,
    toPath: `https://directory.lawnext.com/products/savvyacademy-learning-management-system/reviews/`,
    isPermanent: true
  });

  createRedirect({
    fromPath: `/directory-companies/listing/bobaguard/reviews/*	`,
    toPath: `https://directory.lawnext.com/products/bobaguard/reviews/`,
    isPermanent: true
  });

  createRedirect({
    fromPath: `/directory-companies/listing/documate/reviews/*`,
    toPath: `https://directory.lawnext.com/products/sdocumate/reviews/`,
    isPermanent: true
  });

  createRedirect({
    fromPath: `/directory-companies/listing/onelaw/reviews/*`,
    toPath: `https://directory.lawnext.com/products/sdocumate/reviews/`,
    isPermanent: true
  });


	createRedirect({
    fromPath: `/directory-companies/categories/*`,
    toPath: `https://directory.lawnext.com/categories/*`,
    isPermanent: true
  });

  createRedirect({
    fromPath: `/directory-companies/listing/*`,
    toPath: `https://directory.lawnext.com/products/*`,
    isPermanent: true
  });

  createRedirect({
    fromPath: `/for-reviewers/`,
    toPath: `https://directory.lawnext.com/write-a-review/`,
    isPermanent: true
  });

  createRedirect({
    fromPath: `/for-vendors/`,
    toPath: `https://directory.lawnext.com/sell-on-lawnext/`,
    isPermanent: true
  });

  createRedirect({
    fromPath: `/search/`,
    toPath: `https://directory.lawnext.com/`,
    isPermanent: false
  });

  createRedirect({
    fromPath: `/review-product/*`,
    toPath: `https://directory.lawnext.com/review/*`,
    isPermanent: true
  });

  createRedirect({
    fromPath: `/submit-new-free-listing/`,
    toPath: `https://portal.lawnext.com`,
    isPermanent: true
  });

  createRedirect({
    fromPath: `/premium-opportunities/`,
    toPath: `https://directory.lawnext.com/`,
    isPermanent: false
  });

  
}
