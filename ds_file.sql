-- Table: public.task_status

-- DROP TABLE IF EXISTS public.task_status;

CREATE TABLE IF NOT EXISTS public.task_status
(
    s_id integer NOT NULL DEFAULT nextval('task_status_s_id_seq'::regclass),
    s_descr text COLLATE pg_catalog."default",
    updated_at timestamp without time zone,
    t_id integer,
    CONSTRAINT task_status_pkey PRIMARY KEY (s_id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.task_status
    OWNER to postgres;
    
------------------------------------------

-- Table: public.task_category

-- DROP TABLE IF EXISTS public.task_category;

CREATE TABLE IF NOT EXISTS public.task_category
(
    cat_id integer NOT NULL DEFAULT nextval('task_category_cat_id_seq'::regclass),
    cat_descr text COLLATE pg_catalog."default",
    CONSTRAINT task_category_pkey PRIMARY KEY (cat_id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.task_category
    OWNER to postgres;
    
------------------------------------------

-- Table: public.task

-- DROP TABLE IF EXISTS public.task;

CREATE TABLE IF NOT EXISTS public.task
(
    task_id integer NOT NULL DEFAULT nextval('task_task_id_seq'::regclass),
    task_title text COLLATE pg_catalog."default",
    task_descr text COLLATE pg_catalog."default",
    task_priority integer,
    created_at timestamp without time zone,
    created_by integer,
    updated_at timestamp without time zone,
    updated_by integer,
    last_status integer,
    category integer,
    CONSTRAINT task_pkey PRIMARY KEY (task_id),
    CONSTRAINT fk_cat FOREIGN KEY (category)
        REFERENCES public.task_category (cat_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fk_status FOREIGN KEY (last_status)
        REFERENCES public.task_status (s_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT fk_user FOREIGN KEY (created_by)
        REFERENCES public.employee (e_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE SET NULL
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.task
    OWNER to postgres;
    
----------------------------------------
