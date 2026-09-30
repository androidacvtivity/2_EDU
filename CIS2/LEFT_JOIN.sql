


            SELECT 
            L.RIND_MOD,
            L.DENUMIRE

            FROM VW_2EDU_1 L  LEFT JOIN VW_SPEC_2EDU R ON R.RIND = L.RIND_MOD
            
            WHERE 
            R.RIND IS NULL
             