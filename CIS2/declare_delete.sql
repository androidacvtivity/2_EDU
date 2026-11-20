DECLARE
    v_deleted    PLS_INTEGER;
    v_start_time PLS_INTEGER := DBMS_UTILITY.GET_TIME;
BEGIN
    LOOP
        DELETE FROM CIS2.MD_RIND
        WHERE FORM = 49
          AND capitol = 1049
          AND capitol_vers = 2015
          AND statut = '3'
          AND rind LIKE '4%'
          AND LENGTH(rind) > 3
          AND ROWNUM <= 25;

        v_deleted := SQL%ROWCOUNT;

        COMMIT;

        -- Ie?im daca nu mai sunt rânduri de ?ters
        EXIT WHEN v_deleted = 0;

        -- GET_TIME este în sutimi de secunda.
        -- 19 minute = 19 * 60 * 100
        EXIT WHEN DBMS_UTILITY.GET_TIME - v_start_time >= 19 * 60 * 100;
    END LOOP;
END;
/