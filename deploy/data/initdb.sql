--
-- PostgreSQL database dump
--

-- Dumped from database version 12.5 (Ubuntu 12.5-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 13.1

-- Started on 2021-02-04 09:59:07 +08

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
-- TOC entry 202 (class 1259 OID 19566)
-- Name: config; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.config (
    spinner integer[],
    invites integer,
    games_per_ad integer,
    days_to_claim integer,
    id integer NOT NULL,
    game_loader_template character varying(5000)
);


ALTER TABLE public.config OWNER TO postgres;

--
-- TOC entry 203 (class 1259 OID 19572)
-- Name: game; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.game (
    id bigint NOT NULL,
    title character varying(50),
    subtitle character varying(150),
    img_url character varying(350),
    content character varying(2000),
    type_id integer,
    game_code text,
    engine_id integer,
    version integer,
    status integer,
    score_rule integer,
    watch_ad_get_tickets integer,
    watch_ad_get_exp integer,
    use_gem_get_tickets integer,
    use_gem_get_exp integer
);


ALTER TABLE public.game OWNER TO postgres;

--
-- TOC entry 204 (class 1259 OID 19578)
-- Name: game_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.game_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.game_id_seq OWNER TO postgres;

--
-- TOC entry 3159 (class 0 OID 0)
-- Dependencies: 204
-- Name: game_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.game_id_seq OWNED BY public.game.id;


--
-- TOC entry 205 (class 1259 OID 19580)
-- Name: game_leader_rule; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.game_leader_rule (
    game_id bigint,
    rank integer,
    tickets integer,
    exp integer
);


ALTER TABLE public.game_leader_rule OWNER TO postgres;

--
-- TOC entry 206 (class 1259 OID 19583)
-- Name: gplayer; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.gplayer (
    id bigint NOT NULL,
    game_id bigint NOT NULL,
    user_id bigint NOT NULL,
    enter_timestamp timestamp without time zone,
    leave_timestamp timestamp without time zone,
    game_score integer
);


ALTER TABLE public.gplayer OWNER TO postgres;

--
-- TOC entry 207 (class 1259 OID 19586)
-- Name: gplayer_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.gplayer_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.gplayer_id_seq OWNER TO postgres;

--
-- TOC entry 3160 (class 0 OID 0)
-- Dependencies: 207
-- Name: gplayer_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.gplayer_id_seq OWNED BY public.gplayer.id;


--
-- TOC entry 208 (class 1259 OID 19588)
-- Name: item; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.item (
    id bigint NOT NULL,
    title character varying(50),
    subtitle character varying(150),
    img_url character varying(350),
    content character varying(2000),
    type_id integer DEFAULT 0,
    price double precision DEFAULT 0,
    quantity integer DEFAULT 0,
    status integer DEFAULT 0
);


ALTER TABLE public.item OWNER TO postgres;

--
-- TOC entry 209 (class 1259 OID 19598)
-- Name: item_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.item_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.item_id_seq OWNER TO postgres;

--
-- TOC entry 3161 (class 0 OID 0)
-- Dependencies: 209
-- Name: item_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.item_id_seq OWNED BY public.item.id;


--
-- TOC entry 210 (class 1259 OID 19600)
-- Name: item_type; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.item_type (
    id integer NOT NULL,
    title character varying(100)
);


ALTER TABLE public.item_type OWNER TO postgres;

--
-- TOC entry 211 (class 1259 OID 19603)
-- Name: prize; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.prize (
    id bigint NOT NULL,
    title character varying(50),
    subtitle character varying(150),
    img_url character varying(350),
    content character varying(2000),
    type_id integer,
    tickets_required bigint,
    duration_days integer DEFAULT 0,
    duration_hours integer DEFAULT 0,
    timezone double precision DEFAULT 0,
    scheduled_on timestamp without time zone,
    is_repeat boolean,
    repeated_on integer[] DEFAULT '{}'::integer[],
    status integer,
    tournament_ids bigint[],
    status_prize integer DEFAULT 0,
    tickets_collected bigint DEFAULT 0
);


ALTER TABLE public.prize OWNER TO postgres;

--
-- TOC entry 212 (class 1259 OID 19615)
-- Name: prize_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.prize_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.prize_id_seq OWNER TO postgres;

--
-- TOC entry 3162 (class 0 OID 0)
-- Dependencies: 212
-- Name: prize_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.prize_id_seq OWNED BY public.prize.id;


--
-- TOC entry 213 (class 1259 OID 19617)
-- Name: prize_type; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.prize_type (
    id integer NOT NULL,
    title character varying(100)
);


ALTER TABLE public.prize_type OWNER TO postgres;

--
-- TOC entry 214 (class 1259 OID 19620)
-- Name: raffle; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.raffle (
    id bigint NOT NULL,
    user_id bigint NOT NULL,
    prize_id bigint NOT NULL,
    tickets_amount integer NOT NULL
);


ALTER TABLE public.raffle OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 19623)
-- Name: raffle_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.raffle_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.raffle_id_seq OWNER TO postgres;

--
-- TOC entry 3163 (class 0 OID 0)
-- Dependencies: 215
-- Name: raffle_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.raffle_id_seq OWNED BY public.raffle.id;


--
-- TOC entry 216 (class 1259 OID 19625)
-- Name: rank; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.rank (
    id bigint NOT NULL,
    title character varying(50),
    exp bigint,
    gem bigint,
    multiplier double precision
);


ALTER TABLE public.rank OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 19628)
-- Name: rank_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.rank_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.rank_id_seq OWNER TO postgres;

--
-- TOC entry 3164 (class 0 OID 0)
-- Dependencies: 217
-- Name: rank_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.rank_id_seq OWNED BY public.rank.id;


--
-- TOC entry 218 (class 1259 OID 19630)
-- Name: shop_buy; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.shop_buy (
    id bigint NOT NULL,
    item_type_id integer,
    item_id bigint,
    user_id bigint
);


ALTER TABLE public.shop_buy OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 19633)
-- Name: shop_buy_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.shop_buy_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.shop_buy_id_seq OWNER TO postgres;

--
-- TOC entry 3165 (class 0 OID 0)
-- Dependencies: 219
-- Name: shop_buy_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.shop_buy_id_seq OWNED BY public.shop_buy.id;


--
-- TOC entry 220 (class 1259 OID 19635)
-- Name: status_type; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.status_type (
    id integer NOT NULL,
    title character varying(100)
);


ALTER TABLE public.status_type OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 19638)
-- Name: subscription; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.subscription (
    id bigint NOT NULL,
    title character varying(50),
    subtitle character varying(150),
    img_url character varying(350),
    content character varying(2000),
    type_id integer,
    price double precision DEFAULT 0,
    quantity integer DEFAULT 0,
    status integer
);


ALTER TABLE public.subscription OWNER TO postgres;

--
-- TOC entry 222 (class 1259 OID 19646)
-- Name: subscription_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.subscription_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.subscription_id_seq OWNER TO postgres;

--
-- TOC entry 3166 (class 0 OID 0)
-- Dependencies: 222
-- Name: subscription_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.subscription_id_seq OWNED BY public.subscription.id;


--
-- TOC entry 223 (class 1259 OID 19648)
-- Name: subscription_type; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.subscription_type (
    id integer NOT NULL,
    title character varying(100)
);


ALTER TABLE public.subscription_type OWNER TO postgres;

--
-- TOC entry 224 (class 1259 OID 19651)
-- Name: timezones; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.timezones (
    id integer NOT NULL,
    "offset" double precision,
    stext character varying(10),
    ltext character varying(100)
);


ALTER TABLE public.timezones OWNER TO postgres;

--
-- TOC entry 225 (class 1259 OID 19654)
-- Name: timezones_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.timezones_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.timezones_id_seq OWNER TO postgres;

--
-- TOC entry 3167 (class 0 OID 0)
-- Dependencies: 225
-- Name: timezones_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.timezones_id_seq OWNED BY public.timezones.id;


--
-- TOC entry 226 (class 1259 OID 19656)
-- Name: tournament; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tournament (
    id bigint NOT NULL,
    title character varying(150),
    tour_set_ids bigint[],
    status integer
);


ALTER TABLE public.tournament OWNER TO postgres;

--
-- TOC entry 227 (class 1259 OID 19662)
-- Name: tournament_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tournament_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tournament_id_seq OWNER TO postgres;

--
-- TOC entry 3168 (class 0 OID 0)
-- Dependencies: 227
-- Name: tournament_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tournament_id_seq OWNED BY public.tournament.id;


--
-- TOC entry 228 (class 1259 OID 19664)
-- Name: tournament_set; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tournament_set (
    id bigint NOT NULL,
    title character varying(150),
    duration_days integer DEFAULT 0,
    duration_hours integer,
    is_group boolean
);


ALTER TABLE public.tournament_set OWNER TO postgres;

--
-- TOC entry 229 (class 1259 OID 19668)
-- Name: tournament_set_game_rule; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tournament_set_game_rule (
    id bigint NOT NULL,
    set_id bigint NOT NULL,
    game_id bigint NOT NULL,
    duration_days integer NOT NULL,
    duration_hours integer NOT NULL,
    duration_minutes integer NOT NULL,
    group_id integer DEFAULT 0 NOT NULL
);


ALTER TABLE public.tournament_set_game_rule OWNER TO postgres;

--
-- TOC entry 230 (class 1259 OID 19672)
-- Name: tournament_set_game_rule_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tournament_set_game_rule_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tournament_set_game_rule_id_seq OWNER TO postgres;

--
-- TOC entry 3169 (class 0 OID 0)
-- Dependencies: 230
-- Name: tournament_set_game_rule_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tournament_set_game_rule_id_seq OWNED BY public.tournament_set_game_rule.id;


--
-- TOC entry 231 (class 1259 OID 19674)
-- Name: tournament_set_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tournament_set_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tournament_set_id_seq OWNER TO postgres;

--
-- TOC entry 3170 (class 0 OID 0)
-- Dependencies: 231
-- Name: tournament_set_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tournament_set_id_seq OWNED BY public.tournament_set.id;


--
-- TOC entry 232 (class 1259 OID 19676)
-- Name: user; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."user" (
    id bigint NOT NULL,
    username character varying(128) NOT NULL,
    passhash character varying(2000) NOT NULL,
    email character varying(355) NOT NULL,
    phone character varying(20) NOT NULL,
    firstname character varying(50) NOT NULL,
    lastname character varying(50) NOT NULL,
    created_on timestamp without time zone NOT NULL,
    last_login timestamp without time zone NOT NULL,
    role_id integer NOT NULL,
    status integer DEFAULT 0 NOT NULL,
    gem_balance bigint DEFAULT 0,
    social_link_fb character varying(355) DEFAULT ''::character varying,
    social_link_google character varying(355) DEFAULT ''::character varying,
    avatar_url character varying(355) DEFAULT ''::character varying,
    exp integer DEFAULT 0,
    full_name character varying(355) DEFAULT ''::character varying,
    country_code integer DEFAULT 0,
    address character varying(1000) DEFAULT ''::character varying,
    city character varying(355) DEFAULT ''::character varying,
    state character varying(355) DEFAULT ''::character varying,
    zip_code character varying(20) DEFAULT ''::character varying,
    country character varying(355) DEFAULT ''::character varying,
    is_email_confirmed boolean DEFAULT false,
    is_notify_allowed boolean DEFAULT false,
    is_notify_new_reward boolean DEFAULT false,
    is_notify_new_tournament boolean DEFAULT false,
    is_notify_tour_ending boolean DEFAULT false,
    nick_name character varying(50) DEFAULT ''::character varying,
    spins_left integer DEFAULT 0,
    rank integer DEFAULT 0,
    gems integer DEFAULT 0,
    tickets integer DEFAULT 0,
    current_game_id integer DEFAULT 0,
    current_game_score integer DEFAULT 0,
    today_tickets bigint
);


ALTER TABLE public."user" OWNER TO postgres;

--
-- TOC entry 233 (class 1259 OID 19707)
-- Name: user_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_id_seq OWNER TO postgres;

--
-- TOC entry 3171 (class 0 OID 0)
-- Dependencies: 233
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;


--
-- TOC entry 234 (class 1259 OID 19709)
-- Name: user_invites; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_invites (
    id bigint NOT NULL,
    user_id bigint,
    invited_by bigint,
    invited_date timestamp without time zone,
    is_claimed boolean,
    claimed_date timestamp without time zone
);


ALTER TABLE public.user_invites OWNER TO postgres;

--
-- TOC entry 235 (class 1259 OID 19712)
-- Name: user_invites_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_invites_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_invites_id_seq OWNER TO postgres;

--
-- TOC entry 3172 (class 0 OID 0)
-- Dependencies: 235
-- Name: user_invites_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_invites_id_seq OWNED BY public.user_invites.id;


--
-- TOC entry 236 (class 1259 OID 19714)
-- Name: winner; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.winner (
    id bigint NOT NULL,
    prize_id bigint NOT NULL,
    user_id bigint NOT NULL,
    created_on timestamp without time zone,
    status integer,
    tournament_id bigint
);


ALTER TABLE public.winner OWNER TO postgres;

--
-- TOC entry 237 (class 1259 OID 19717)
-- Name: winner_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.winner_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.winner_id_seq OWNER TO postgres;

--
-- TOC entry 3173 (class 0 OID 0)
-- Dependencies: 237
-- Name: winner_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.winner_id_seq OWNED BY public.winner.id;


--
-- TOC entry 238 (class 1259 OID 19719)
-- Name: winner_status_type; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.winner_status_type (
    id integer NOT NULL,
    title character varying(100)
);


ALTER TABLE public.winner_status_type OWNER TO postgres;

--
-- TOC entry 2915 (class 2604 OID 19722)
-- Name: game id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.game ALTER COLUMN id SET DEFAULT nextval('public.game_id_seq'::regclass);


--
-- TOC entry 2916 (class 2604 OID 19723)
-- Name: gplayer id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gplayer ALTER COLUMN id SET DEFAULT nextval('public.gplayer_id_seq'::regclass);


--
-- TOC entry 2921 (class 2604 OID 19724)
-- Name: item id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item ALTER COLUMN id SET DEFAULT nextval('public.item_id_seq'::regclass);


--
-- TOC entry 2928 (class 2604 OID 19725)
-- Name: prize id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.prize ALTER COLUMN id SET DEFAULT nextval('public.prize_id_seq'::regclass);


--
-- TOC entry 2929 (class 2604 OID 19726)
-- Name: raffle id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.raffle ALTER COLUMN id SET DEFAULT nextval('public.raffle_id_seq'::regclass);


--
-- TOC entry 2930 (class 2604 OID 19727)
-- Name: rank id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rank ALTER COLUMN id SET DEFAULT nextval('public.rank_id_seq'::regclass);


--
-- TOC entry 2931 (class 2604 OID 19728)
-- Name: shop_buy id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.shop_buy ALTER COLUMN id SET DEFAULT nextval('public.shop_buy_id_seq'::regclass);


--
-- TOC entry 2934 (class 2604 OID 19729)
-- Name: subscription id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.subscription ALTER COLUMN id SET DEFAULT nextval('public.subscription_id_seq'::regclass);


--
-- TOC entry 2935 (class 2604 OID 19730)
-- Name: timezones id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.timezones ALTER COLUMN id SET DEFAULT nextval('public.timezones_id_seq'::regclass);


--
-- TOC entry 2936 (class 2604 OID 19731)
-- Name: tournament id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tournament ALTER COLUMN id SET DEFAULT nextval('public.tournament_id_seq'::regclass);


--
-- TOC entry 2938 (class 2604 OID 19732)
-- Name: tournament_set id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tournament_set ALTER COLUMN id SET DEFAULT nextval('public.tournament_set_id_seq'::regclass);


--
-- TOC entry 2940 (class 2604 OID 19733)
-- Name: tournament_set_game_rule id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tournament_set_game_rule ALTER COLUMN id SET DEFAULT nextval('public.tournament_set_game_rule_id_seq'::regclass);


--
-- TOC entry 2966 (class 2604 OID 19734)
-- Name: user id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);


--
-- TOC entry 2967 (class 2604 OID 19735)
-- Name: user_invites id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_invites ALTER COLUMN id SET DEFAULT nextval('public.user_invites_id_seq'::regclass);


--
-- TOC entry 2968 (class 2604 OID 19736)
-- Name: winner id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.winner ALTER COLUMN id SET DEFAULT nextval('public.winner_id_seq'::regclass);


--
-- TOC entry 2970 (class 2606 OID 19738)
-- Name: config config_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.config
    ADD CONSTRAINT config_pkey PRIMARY KEY (id);


--
-- TOC entry 2973 (class 2606 OID 19740)
-- Name: game game_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.game
    ADD CONSTRAINT game_pkey PRIMARY KEY (id);


--
-- TOC entry 2975 (class 2606 OID 19742)
-- Name: gplayer gplayer_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gplayer
    ADD CONSTRAINT gplayer_pkey PRIMARY KEY (id);


--
-- TOC entry 2978 (class 2606 OID 19744)
-- Name: item item_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item
    ADD CONSTRAINT item_pkey PRIMARY KEY (id);


--
-- TOC entry 2980 (class 2606 OID 19746)
-- Name: item_type item_type_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item_type
    ADD CONSTRAINT item_type_pkey PRIMARY KEY (id);


--
-- TOC entry 2983 (class 2606 OID 19748)
-- Name: prize prize_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.prize
    ADD CONSTRAINT prize_pkey PRIMARY KEY (id);


--
-- TOC entry 2985 (class 2606 OID 19750)
-- Name: prize_type prize_type_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.prize_type
    ADD CONSTRAINT prize_type_pkey PRIMARY KEY (id);


--
-- TOC entry 2987 (class 2606 OID 19752)
-- Name: raffle raffle_entries_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.raffle
    ADD CONSTRAINT raffle_entries_pkey PRIMARY KEY (id);


--
-- TOC entry 2989 (class 2606 OID 19754)
-- Name: rank rank_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rank
    ADD CONSTRAINT rank_pkey PRIMARY KEY (id);


--
-- TOC entry 2991 (class 2606 OID 19756)
-- Name: shop_buy shop_buy_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.shop_buy
    ADD CONSTRAINT shop_buy_pkey PRIMARY KEY (id);


--
-- TOC entry 2993 (class 2606 OID 19758)
-- Name: status_type status_type_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.status_type
    ADD CONSTRAINT status_type_pkey PRIMARY KEY (id);


--
-- TOC entry 2996 (class 2606 OID 19760)
-- Name: subscription subscription_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.subscription
    ADD CONSTRAINT subscription_pkey PRIMARY KEY (id);


--
-- TOC entry 2998 (class 2606 OID 19762)
-- Name: subscription_type subscription_type_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.subscription_type
    ADD CONSTRAINT subscription_type_pkey PRIMARY KEY (id);


--
-- TOC entry 3000 (class 2606 OID 19764)
-- Name: timezones timezones_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.timezones
    ADD CONSTRAINT timezones_pkey PRIMARY KEY (id);


--
-- TOC entry 3003 (class 2606 OID 19766)
-- Name: tournament tournament_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tournament
    ADD CONSTRAINT tournament_pkey PRIMARY KEY (id);


--
-- TOC entry 3008 (class 2606 OID 19768)
-- Name: tournament_set_game_rule tournament_set_game_rule_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tournament_set_game_rule
    ADD CONSTRAINT tournament_set_game_rule_pkey PRIMARY KEY (id);


--
-- TOC entry 3006 (class 2606 OID 19770)
-- Name: tournament_set tournament_set_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tournament_set
    ADD CONSTRAINT tournament_set_pkey PRIMARY KEY (id);


--
-- TOC entry 3015 (class 2606 OID 19772)
-- Name: user user_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_email_key UNIQUE (email);


--
-- TOC entry 3023 (class 2606 OID 19774)
-- Name: user_invites user_invites_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_invites
    ADD CONSTRAINT user_invites_pkey PRIMARY KEY (id);


--
-- TOC entry 3017 (class 2606 OID 19776)
-- Name: user user_phone_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_phone_key UNIQUE (phone);


--
-- TOC entry 3019 (class 2606 OID 19778)
-- Name: user user_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);


--
-- TOC entry 3021 (class 2606 OID 19780)
-- Name: user user_username_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_username_key UNIQUE (username);


--
-- TOC entry 3025 (class 2606 OID 19782)
-- Name: winner winner_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.winner
    ADD CONSTRAINT winner_pkey PRIMARY KEY (id);


--
-- TOC entry 3027 (class 2606 OID 19784)
-- Name: winner_status_type winner_status_type_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.winner_status_type
    ADD CONSTRAINT winner_status_type_pkey PRIMARY KEY (id);


--
-- TOC entry 2971 (class 1259 OID 19785)
-- Name: game_lower_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX game_lower_idx ON public.game USING btree (lower((title)::text));


--
-- TOC entry 3009 (class 1259 OID 19786)
-- Name: idx_user_email; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_user_email ON public."user" USING btree (email);


--
-- TOC entry 3010 (class 1259 OID 19787)
-- Name: idx_user_firstname; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_user_firstname ON public."user" USING btree (firstname);


--
-- TOC entry 3011 (class 1259 OID 19788)
-- Name: idx_user_lastname; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_user_lastname ON public."user" USING btree (lastname);


--
-- TOC entry 3012 (class 1259 OID 19789)
-- Name: idx_user_phone; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_user_phone ON public."user" USING btree (phone);


--
-- TOC entry 3013 (class 1259 OID 19790)
-- Name: idx_user_username; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_user_username ON public."user" USING btree (username);


--
-- TOC entry 2976 (class 1259 OID 19791)
-- Name: item_lower_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX item_lower_idx ON public.item USING btree (lower((title)::text));


--
-- TOC entry 2981 (class 1259 OID 19792)
-- Name: prize_lower_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX prize_lower_idx ON public.prize USING btree (lower((title)::text));


--
-- TOC entry 2994 (class 1259 OID 19793)
-- Name: subscription_lower_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX subscription_lower_idx ON public.subscription USING btree (lower((title)::text));


--
-- TOC entry 3001 (class 1259 OID 19794)
-- Name: tournament_lower_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX tournament_lower_idx ON public.tournament USING btree (lower((title)::text));


--
-- TOC entry 3004 (class 1259 OID 19795)
-- Name: tournament_set_lower_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX tournament_set_lower_idx ON public.tournament_set USING btree (lower((title)::text));


-- Completed on 2021-02-04 09:59:12 +08

--
-- PostgreSQL database dump complete
--

