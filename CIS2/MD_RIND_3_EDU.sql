
        SELECT 
       L.RIND
       FROM  VW_SPEC_3EDU L  LEFT JOIN (
       
       SELECT 
        RIND 
       FROM CIS2.MD_RIND 
       
       WHERE 
       FORM = 50
          AND capitol = 1058
          AND capitol_vers = 2015
          AND statut = '1'
--          AND ORDINE >= 7000
      --    AND rind LIKE '1%'
           AND LENGTH(rind) > 3
          AND ORDINE  BETWEEN 5002 AND 6000
       ) R ON R.RIND = L.RIND
       
       
       WHERE 
       
      R.RIND IS NULL  