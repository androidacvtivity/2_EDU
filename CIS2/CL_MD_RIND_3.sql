SELECT
 --   TRIM(SUBSTR(RIND,2,30)) RIND_MOD,
   DISTINCT  
   RIND,
   ORDINE
--    DENUMIRE,
--    ORDINE
 
FROM CIS2.MD_RIND
WHERE 

  FORM = 49
  AND CAPITOL = 1049
  AND CAPITOL_VERS = 2015
  AND STATUT = '1'
  --AND RIND  LIKE '2%'
  AND LENGTH(RIND) > 3
  AND TRIM(SUBSTR(RIND,2,30)) IN ('7131.17133.2','7131.107133.2')
  --AND DENUMIRE IN ('Electrician/electriciana în construc?ii-Instalator/instalatoare sisteme fotovoltaice solare')
  ORDER BY 
  ORDINE