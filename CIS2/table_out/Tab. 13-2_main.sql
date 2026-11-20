            SELECT 
                ID_MD
              
                    FROM CIS2.MD_RIND
                    WHERE
                    FORM IN (49)  
                    AND 
                    CAPITOL IN (1049)
                    AND CAPITOL_VERS = 2015
                    AND  STATUT = '1'
                    AND 
                    (
                    RIND  IN ('10','20','30','35','40','50','60','70')
                    OR 
                    ORDINE > 7000
                    )
                    ORDER BY 
                    ORDINE