DECLARE
    v_deleted PLS_INTEGER;
BEGIN
    LOOP
        DELETE FROM CIS2.MD_RIND
        WHERE 
          FORM = 49
          AND capitol = 1049
          AND capitol_vers = 2015
          AND statut = '3'
          AND rind LIKE '2%'
          AND LENGTH(rind) > 3
          AND ROWNUM <= 25;

        v_deleted := SQL%ROWCOUNT;

        COMMIT;

        EXIT WHEN v_deleted = 0;
    END LOOP;
END;
/