DELETE
--SELECT *

    FROM CIS2.MD_RIND 
    
    WHERE
    
    capitol=1049 and  capitol_vers=2015
  AND STATUT = '3'

---- 
 AND RIND LIKE '1%'
 AND LENGTH(RIND) > 3 
 
  AND ROWNUM <= 25