CREATE TABLE public.collections (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    colony_id uuid NOT NULL,
    amount integer NOT NULL,
    date date DEFAULT now() NOT NULL
);
CREATE TABLE public.colonies (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    bees integer DEFAULT 0 NOT NULL,
    hives integer DEFAULT 0 NOT NULL
);
ALTER TABLE ONLY public.collections
    ADD CONSTRAINT collections_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.colonies
    ADD CONSTRAINT colonies_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.collections
    ADD CONSTRAINT collections_colony_id_fkey FOREIGN KEY (colony_id) REFERENCES public.colonies(id) ON UPDATE CASCADE ON DELETE CASCADE;
