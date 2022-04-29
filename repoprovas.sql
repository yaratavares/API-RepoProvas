--
-- PostgreSQL database dump
--

-- Dumped from database version 12.9 (Ubuntu 12.9-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.9 (Ubuntu 12.9-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO postgres;

--
-- Name: categories; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.categories (
    id integer NOT NULL,
    name text NOT NULL
);


ALTER TABLE public.categories OWNER TO postgres;

--
-- Name: categories_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.categories_id_seq OWNER TO postgres;

--
-- Name: categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.categories_id_seq OWNED BY public.categories.id;


--
-- Name: disciplines; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.disciplines (
    id integer NOT NULL,
    name text NOT NULL,
    "termId" integer NOT NULL
);


ALTER TABLE public.disciplines OWNER TO postgres;

--
-- Name: disciplines_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.disciplines_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.disciplines_id_seq OWNER TO postgres;

--
-- Name: disciplines_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.disciplines_id_seq OWNED BY public.disciplines.id;


--
-- Name: sessions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sessions (
    "userId" integer NOT NULL,
    token text NOT NULL
);


ALTER TABLE public.sessions OWNER TO postgres;

--
-- Name: teachers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.teachers (
    id integer NOT NULL,
    name text NOT NULL
);


ALTER TABLE public.teachers OWNER TO postgres;

--
-- Name: teachersDisciplines; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."teachersDisciplines" (
    id integer NOT NULL,
    "teacherId" integer NOT NULL,
    "disciplineId" integer NOT NULL
);


ALTER TABLE public."teachersDisciplines" OWNER TO postgres;

--
-- Name: teachersDisciplines_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."teachersDisciplines_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."teachersDisciplines_id_seq" OWNER TO postgres;

--
-- Name: teachersDisciplines_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."teachersDisciplines_id_seq" OWNED BY public."teachersDisciplines".id;


--
-- Name: teachers_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.teachers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.teachers_id_seq OWNER TO postgres;

--
-- Name: teachers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.teachers_id_seq OWNED BY public.teachers.id;


--
-- Name: terms; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.terms (
    id integer NOT NULL,
    number integer NOT NULL
);


ALTER TABLE public.terms OWNER TO postgres;

--
-- Name: terms_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.terms_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.terms_id_seq OWNER TO postgres;

--
-- Name: terms_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.terms_id_seq OWNED BY public.terms.id;


--
-- Name: tests; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tests (
    id integer NOT NULL,
    name text NOT NULL,
    "pdfUrl" text NOT NULL,
    "categoryId" integer NOT NULL,
    "teacherDisciplineId" integer NOT NULL
);


ALTER TABLE public.tests OWNER TO postgres;

--
-- Name: tests_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tests_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tests_id_seq OWNER TO postgres;

--
-- Name: tests_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tests_id_seq OWNED BY public.tests.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    email text NOT NULL,
    password text NOT NULL
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: categories id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categories_id_seq'::regclass);


--
-- Name: disciplines id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.disciplines ALTER COLUMN id SET DEFAULT nextval('public.disciplines_id_seq'::regclass);


--
-- Name: teachers id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.teachers ALTER COLUMN id SET DEFAULT nextval('public.teachers_id_seq'::regclass);


--
-- Name: teachersDisciplines id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."teachersDisciplines" ALTER COLUMN id SET DEFAULT nextval('public."teachersDisciplines_id_seq"'::regclass);


--
-- Name: terms id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.terms ALTER COLUMN id SET DEFAULT nextval('public.terms_id_seq'::regclass);


--
-- Name: tests id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tests ALTER COLUMN id SET DEFAULT nextval('public.tests_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
8a0e5955-3e6e-4ffb-947d-0afb5ef8c020	54c8528339cc19f06944597729f3b2170d044764f4c20cd5718d80ffc87c61c0	2022-04-23 19:49:36.112608-03	20220423224935_new_database	\N	\N	2022-04-23 19:49:36.066497-03	1
a1a5ca1c-6438-4148-85d0-75a198e6eec3	8dff054b7efbb61ebf0387a02157755ea05ad749872c9617ab55ac49a526249e	2022-04-24 19:44:49.979567-03	20220424224449_create_table_session	\N	\N	2022-04-24 19:44:49.967992-03	1
\.


--
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.categories (id, name) FROM stdin;
1	P1
2	P2
3	P3
4	Final
\.


--
-- Data for Name: disciplines; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.disciplines (id, name, "termId") FROM stdin;
1	typescript	10
2	CSS	1
3	HTML	2
4	Javascript	3
5	Node	4
6	NoSql	5
7	Sql	6
8	Arquitetura	7
9	Boas Práticas	8
10	Deploy	9
11	Carreiras	10
\.


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sessions ("userId", token) FROM stdin;
7	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imd1c3Rhdm9AZW1haWwuY29tIiwiaWF0IjoxNjUwOTA5NTQ0LCJleHAiOjE2NTA5MTMxNDR9.Wg4KHH673DX1Tv44vHKlQa6ypeij6YdQhk7OZkMPl_E
2	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxhbGFAZ21haWwuY29tIiwiaWF0IjoxNjUwODQzMzU5LCJleHAiOjE2NTA4NDY5NTl9.gRu1MLEmr0O1QdQXzUM1RfcZ4MZSdOuix4-nreytx-8
1	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InlhcmFAZ21haWwuY29tIiwiaWF0IjoxNjUwOTA4MDE4LCJleHAiOjE2NTA5MTE2MTh9.okaF8SF97g02nC-2CVFkpt6qx9FmqBjKSOIbdfUX5S8
\.


--
-- Data for Name: teachers; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.teachers (id, name) FROM stdin;
1	Dina
2	Bruna
3	Pedrão
\.


--
-- Data for Name: teachersDisciplines; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."teachersDisciplines" (id, "teacherId", "disciplineId") FROM stdin;
1	1	1
2	1	2
3	1	3
4	1	4
5	1	5
6	3	6
7	3	7
8	3	8
9	3	9
10	3	10
11	2	11
\.


--
-- Data for Name: terms; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.terms (id, number) FROM stdin;
1	10
2	9
3	8
4	7
5	6
6	5
7	4
8	3
9	2
10	1
\.


--
-- Data for Name: tests; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tests (id, name, "pdfUrl", "categoryId", "teacherDisciplineId") FROM stdin;
1	Parrot Card Game	www.google.com	1	4
2	RepoProvas	www.google.com	1	1
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, email, password) FROM stdin;
1	yara@gmail.com	$2b$10$k9PzHp86hkOXex6RuLozMOHoJpPFa/POh03SlJDDWmCg78oxqk/oi
2	lala@gmail.com	$2b$10$thuhb/Ihy2VGeVxgUYJVqeiBLbveUhU0J4Prm6AtRXJhfGLuU/8nS
3	banana@gmail.com	$2b$10$EgBdlZbbp.kLXzXmXwVjbOXgCOqOscv3Zk/yA8t3aZuHawVPKbvve
4	uozinho@gmail.com	$2b$10$8QQexfuG2rrKGNf7X9XNHudWxwI7ETuVe9WKi3eGWIW5DgDZYa47q
5	bananainha@gmail.com	$2b$10$w1Nz.f8YCRHyf2otpqifbOXIxYCDUjJXtGwQ8ultLYuIaaamypKWm
6	bananinha@gmail.com	$2b$10$Jdswy3lRoluQhJC6HTjQjuwLXgjn5xBm6w9tDXUuCBIWHv7ySUfUa
7	gustavo@email.com	$2b$10$jgJEPDpdNncgAyJWn.EbXeRUrNYn2y48JEDJGn9lZr5KNGl2fNk7G
\.


--
-- Name: categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.categories_id_seq', 4, true);


--
-- Name: disciplines_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.disciplines_id_seq', 11, true);


--
-- Name: teachersDisciplines_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."teachersDisciplines_id_seq"', 11, true);


--
-- Name: teachers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.teachers_id_seq', 3, true);


--
-- Name: terms_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.terms_id_seq', 11, true);


--
-- Name: tests_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.tests_id_seq', 2, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 7, true);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: categories categories_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);


--
-- Name: disciplines disciplines_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.disciplines
    ADD CONSTRAINT disciplines_pkey PRIMARY KEY (id);


--
-- Name: sessions sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY ("userId", token);


--
-- Name: teachersDisciplines teachersDisciplines_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."teachersDisciplines"
    ADD CONSTRAINT "teachersDisciplines_pkey" PRIMARY KEY (id);


--
-- Name: teachers teachers_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.teachers
    ADD CONSTRAINT teachers_pkey PRIMARY KEY (id);


--
-- Name: terms terms_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.terms
    ADD CONSTRAINT terms_pkey PRIMARY KEY (id);


--
-- Name: tests tests_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tests
    ADD CONSTRAINT tests_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: categories_name_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX categories_name_key ON public.categories USING btree (name);


--
-- Name: disciplines_name_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX disciplines_name_key ON public.disciplines USING btree (name);


--
-- Name: teachers_name_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX teachers_name_key ON public.teachers USING btree (name);


--
-- Name: terms_number_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX terms_number_key ON public.terms USING btree (number);


--
-- Name: users_email_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX users_email_key ON public.users USING btree (email);


--
-- Name: disciplines disciplines_termId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.disciplines
    ADD CONSTRAINT "disciplines_termId_fkey" FOREIGN KEY ("termId") REFERENCES public.terms(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: sessions sessions_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT "sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: teachersDisciplines teachersDisciplines_disciplineId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."teachersDisciplines"
    ADD CONSTRAINT "teachersDisciplines_disciplineId_fkey" FOREIGN KEY ("disciplineId") REFERENCES public.disciplines(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: teachersDisciplines teachersDisciplines_teacherId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."teachersDisciplines"
    ADD CONSTRAINT "teachersDisciplines_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES public.teachers(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: tests tests_categoryId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tests
    ADD CONSTRAINT "tests_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES public.categories(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: tests tests_teacherDisciplineId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tests
    ADD CONSTRAINT "tests_teacherDisciplineId_fkey" FOREIGN KEY ("teacherDisciplineId") REFERENCES public."teachersDisciplines"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- PostgreSQL database dump complete
--

