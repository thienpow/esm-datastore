--
-- PostgreSQL database dump
--

-- Dumped from database version 12.6 (Ubuntu 12.6-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 13.2

-- Started on 2021-05-19 22:58:26 +08

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
-- TOC entry 255 (class 1259 OID 20320)
-- Name: checker_log; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.checker_log (
    id bigint NOT NULL,
    checked_on timestamp without time zone DEFAULT now(),
    time_spent bigint DEFAULT 0
);


ALTER TABLE public.checker_log OWNER TO postgres;

--
-- TOC entry 254 (class 1259 OID 20318)
-- Name: checker_log_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.checker_log_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.checker_log_id_seq OWNER TO postgres;

--
-- TOC entry 3253 (class 0 OID 0)
-- Dependencies: 254
-- Name: checker_log_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.checker_log_id_seq OWNED BY public.checker_log.id;


--
-- TOC entry 202 (class 1259 OID 19817)
-- Name: config; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.config (
    invites integer,
    games_per_ad integer,
    days_to_claim integer,
    id integer NOT NULL,
    game_loader_template character varying(5000),
    freespin_per_day integer,
    gems_per_spins_1 integer,
    ads_per_spins_1 integer,
    gems_per_spins_2 integer,
    ads_per_spins_2 integer
);


ALTER TABLE public.config OWNER TO postgres;

--
-- TOC entry 253 (class 1259 OID 20312)
-- Name: current_game; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.current_game (
    id bigint NOT NULL,
    prize_id bigint,
    tour_id bigint,
    set_id bigint,
    tsg_id bigint,
    game_id bigint,
    start_timestamp timestamp without time zone,
    end_timestamp timestamp without time zone
);


ALTER TABLE public.current_game OWNER TO postgres;

--
-- TOC entry 252 (class 1259 OID 20310)
-- Name: current_game_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.current_game_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.current_game_id_seq OWNER TO postgres;

--
-- TOC entry 3254 (class 0 OID 0)
-- Dependencies: 252
-- Name: current_game_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.current_game_id_seq OWNED BY public.current_game.id;


--
-- TOC entry 203 (class 1259 OID 19823)
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
    use_gem_get_exp integer,
    use_how_many_gems integer
);


ALTER TABLE public.game OWNER TO postgres;

--
-- TOC entry 204 (class 1259 OID 19829)
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
-- TOC entry 3255 (class 0 OID 0)
-- Dependencies: 204
-- Name: game_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.game_id_seq OWNED BY public.game.id;


--
-- TOC entry 205 (class 1259 OID 19831)
-- Name: game_leader_rule; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.game_leader_rule (
    game_id bigint,
    tickets integer,
    exp integer,
    rank_from integer,
    rank_to integer
);


ALTER TABLE public.game_leader_rule OWNER TO postgres;

--
-- TOC entry 243 (class 1259 OID 20126)
-- Name: gplayer; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.gplayer (
    id bigint NOT NULL,
    game_id bigint NOT NULL,
    user_id bigint NOT NULL,
    enter_timestamp timestamp without time zone,
    leave_timestamp timestamp without time zone DEFAULT '1970-01-01 00:00:00'::timestamp without time zone,
    game_score integer DEFAULT 0,
    is_watched_ad boolean DEFAULT false,
    prize_id bigint,
    is_used_gem boolean DEFAULT false
);


ALTER TABLE public.gplayer OWNER TO postgres;

--
-- TOC entry 242 (class 1259 OID 20124)
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
-- TOC entry 3256 (class 0 OID 0)
-- Dependencies: 242
-- Name: gplayer_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.gplayer_id_seq OWNED BY public.gplayer.id;


--
-- TOC entry 206 (class 1259 OID 19839)
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
-- TOC entry 207 (class 1259 OID 19849)
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
-- TOC entry 3257 (class 0 OID 0)
-- Dependencies: 207
-- Name: item_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.item_id_seq OWNED BY public.item.id;


--
-- TOC entry 208 (class 1259 OID 19851)
-- Name: item_type; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.item_type (
    id integer NOT NULL,
    title character varying(100)
);


ALTER TABLE public.item_type OWNER TO postgres;

--
-- TOC entry 209 (class 1259 OID 19854)
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
    status_progress integer DEFAULT 0,
    tickets_collected bigint DEFAULT 0,
    scheduled_off timestamp without time zone
);


ALTER TABLE public.prize OWNER TO postgres;

--
-- TOC entry 210 (class 1259 OID 19866)
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
-- TOC entry 3258 (class 0 OID 0)
-- Dependencies: 210
-- Name: prize_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.prize_id_seq OWNED BY public.prize.id;


--
-- TOC entry 239 (class 1259 OID 20093)
-- Name: prize_tour; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.prize_tour (
    id bigint NOT NULL,
    prize_id bigint,
    tour_id bigint,
    status integer
);


ALTER TABLE public.prize_tour OWNER TO postgres;

--
-- TOC entry 238 (class 1259 OID 20091)
-- Name: prize_tour_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.prize_tour_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.prize_tour_id_seq OWNER TO postgres;

--
-- TOC entry 3259 (class 0 OID 0)
-- Dependencies: 238
-- Name: prize_tour_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.prize_tour_id_seq OWNED BY public.prize_tour.id;


--
-- TOC entry 211 (class 1259 OID 19868)
-- Name: prize_type; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.prize_type (
    id integer NOT NULL,
    title character varying(100)
);


ALTER TABLE public.prize_type OWNER TO postgres;

--
-- TOC entry 212 (class 1259 OID 19871)
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
-- TOC entry 213 (class 1259 OID 19874)
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
-- TOC entry 3260 (class 0 OID 0)
-- Dependencies: 213
-- Name: raffle_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.raffle_id_seq OWNED BY public.raffle.id;


--
-- TOC entry 214 (class 1259 OID 19876)
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
-- TOC entry 251 (class 1259 OID 20245)
-- Name: shop_buy; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.shop_buy (
    id bigint NOT NULL,
    item_type_id integer,
    item_id bigint,
    user_id bigint,
    payment_id character varying(50),
    sub_id character varying(50),
    price double precision DEFAULT 0,
    created_on timestamp without time zone DEFAULT now()
);


ALTER TABLE public.shop_buy OWNER TO postgres;

--
-- TOC entry 250 (class 1259 OID 20243)
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
-- TOC entry 3261 (class 0 OID 0)
-- Dependencies: 250
-- Name: shop_buy_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.shop_buy_id_seq OWNED BY public.shop_buy.id;


--
-- TOC entry 248 (class 1259 OID 20216)
-- Name: spinner_log; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.spinner_log (
    id bigint NOT NULL,
    user_id bigint,
    tickets_won bigint DEFAULT 0,
    enter_timestamp timestamp without time zone,
    leave_timestamp timestamp without time zone DEFAULT '1970-01-01 00:00:00'::timestamp without time zone,
    is_settled boolean DEFAULT false
);


ALTER TABLE public.spinner_log OWNER TO postgres;

--
-- TOC entry 249 (class 1259 OID 20219)
-- Name: spinner_log_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.spinner_log_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.spinner_log_id_seq OWNER TO postgres;

--
-- TOC entry 3262 (class 0 OID 0)
-- Dependencies: 249
-- Name: spinner_log_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.spinner_log_id_seq OWNED BY public.spinner_log.id;


--
-- TOC entry 233 (class 1259 OID 20050)
-- Name: spinner_rule; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.spinner_rule (
    id integer NOT NULL,
    probability double precision,
    win double precision,
    type_id integer
);


ALTER TABLE public.spinner_rule OWNER TO postgres;

--
-- TOC entry 232 (class 1259 OID 20048)
-- Name: spinner_rule_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.spinner_rule_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.spinner_rule_id_seq OWNER TO postgres;

--
-- TOC entry 3263 (class 0 OID 0)
-- Dependencies: 232
-- Name: spinner_rule_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.spinner_rule_id_seq OWNED BY public.spinner_rule.id;


--
-- TOC entry 234 (class 1259 OID 20056)
-- Name: spinner_win_type; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.spinner_win_type (
    id integer NOT NULL,
    title character varying(100)
);


ALTER TABLE public.spinner_win_type OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 19886)
-- Name: status_type; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.status_type (
    id integer NOT NULL,
    title character varying(100)
);


ALTER TABLE public.status_type OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 19889)
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
    status integer,
    one_time_gem bigint,
    one_time_multiplier double precision,
    daily_gem bigint,
    daily_multiplier double precision,
    one_time_is_firstonly boolean
);


ALTER TABLE public.subscription OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 19897)
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
-- TOC entry 3264 (class 0 OID 0)
-- Dependencies: 217
-- Name: subscription_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.subscription_id_seq OWNED BY public.subscription.id;


--
-- TOC entry 218 (class 1259 OID 19899)
-- Name: subscription_type; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.subscription_type (
    id integer NOT NULL,
    title character varying(100)
);


ALTER TABLE public.subscription_type OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 19902)
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
-- TOC entry 220 (class 1259 OID 19905)
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
-- TOC entry 3265 (class 0 OID 0)
-- Dependencies: 220
-- Name: timezones_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.timezones_id_seq OWNED BY public.timezones.id;


--
-- TOC entry 241 (class 1259 OID 20118)
-- Name: tour_set; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tour_set (
    id bigint NOT NULL,
    tour_id bigint,
    set_id bigint,
    status integer
);


ALTER TABLE public.tour_set OWNER TO postgres;

--
-- TOC entry 240 (class 1259 OID 20116)
-- Name: tour_set_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.tour_set_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tour_set_id_seq OWNER TO postgres;

--
-- TOC entry 3266 (class 0 OID 0)
-- Dependencies: 240
-- Name: tour_set_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tour_set_id_seq OWNED BY public.tour_set.id;


--
-- TOC entry 221 (class 1259 OID 19907)
-- Name: tournament; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tournament (
    id bigint NOT NULL,
    title character varying(150),
    status integer
);


ALTER TABLE public.tournament OWNER TO postgres;

--
-- TOC entry 222 (class 1259 OID 19913)
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
-- TOC entry 3267 (class 0 OID 0)
-- Dependencies: 222
-- Name: tournament_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tournament_id_seq OWNED BY public.tournament.id;


--
-- TOC entry 223 (class 1259 OID 19915)
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
-- TOC entry 224 (class 1259 OID 19919)
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
-- TOC entry 225 (class 1259 OID 19923)
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
-- TOC entry 3268 (class 0 OID 0)
-- Dependencies: 225
-- Name: tournament_set_game_rule_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tournament_set_game_rule_id_seq OWNED BY public.tournament_set_game_rule.id;


--
-- TOC entry 226 (class 1259 OID 19925)
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
-- TOC entry 3269 (class 0 OID 0)
-- Dependencies: 226
-- Name: tournament_set_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.tournament_set_id_seq OWNED BY public.tournament_set.id;


--
-- TOC entry 227 (class 1259 OID 19927)
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
    tickets integer DEFAULT 0,
    current_game_id integer DEFAULT 0,
    current_game_score integer DEFAULT 0,
    today_tickets bigint DEFAULT 0,
    msg_token character varying(512)
);


ALTER TABLE public."user" OWNER TO postgres;

--
-- TOC entry 237 (class 1259 OID 20080)
-- Name: user_admin_change_log; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_admin_change_log (
    id bigint NOT NULL,
    user_id bigint,
    old_status integer,
    new_status integer,
    old_gem_balance bigint,
    new_gem_balance bigint,
    created_on timestamp with time zone,
    changed_by bigint
);


ALTER TABLE public.user_admin_change_log OWNER TO postgres;

--
-- TOC entry 236 (class 1259 OID 20078)
-- Name: user_admin_change_log_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.user_admin_change_log_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_admin_change_log_id_seq OWNER TO postgres;

--
-- TOC entry 3270 (class 0 OID 0)
-- Dependencies: 236
-- Name: user_admin_change_log_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_admin_change_log_id_seq OWNED BY public.user_admin_change_log.id;


--
-- TOC entry 228 (class 1259 OID 19958)
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
-- TOC entry 3271 (class 0 OID 0)
-- Dependencies: 228
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;


--
-- TOC entry 245 (class 1259 OID 20157)
-- Name: user_invites; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_invites (
    id bigint NOT NULL,
    user_id bigint,
    invited_by bigint,
    invited_date timestamp without time zone
);


ALTER TABLE public.user_invites OWNER TO postgres;

--
-- TOC entry 244 (class 1259 OID 20155)
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
-- TOC entry 3272 (class 0 OID 0)
-- Dependencies: 244
-- Name: user_invites_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.user_invites_id_seq OWNED BY public.user_invites.id;


--
-- TOC entry 235 (class 1259 OID 20065)
-- Name: user_status_type; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.user_status_type (
    id integer NOT NULL,
    title character varying(100)
);


ALTER TABLE public.user_status_type OWNER TO postgres;

--
-- TOC entry 229 (class 1259 OID 19965)
-- Name: winner; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.winner (
    id bigint NOT NULL,
    prize_id bigint NOT NULL,
    user_id bigint NOT NULL,
    created_on timestamp without time zone,
    status integer,
    ship_tracking character varying(255),
    claimed_on timestamp without time zone DEFAULT '1970-01-01 00:00:00'::timestamp without time zone
);


ALTER TABLE public.winner OWNER TO postgres;

--
-- TOC entry 247 (class 1259 OID 20187)
-- Name: winner_change_log; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.winner_change_log (
    id bigint NOT NULL,
    winner_id bigint,
    old_status integer,
    new_status integer,
    old_ship_tracking character varying(255),
    new_ship_tracking character varying(255),
    created_on timestamp with time zone,
    changed_by bigint
);


ALTER TABLE public.winner_change_log OWNER TO postgres;

--
-- TOC entry 246 (class 1259 OID 20185)
-- Name: winner_change_log_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.winner_change_log_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.winner_change_log_id_seq OWNER TO postgres;

--
-- TOC entry 3273 (class 0 OID 0)
-- Dependencies: 246
-- Name: winner_change_log_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.winner_change_log_id_seq OWNED BY public.winner_change_log.id;


--
-- TOC entry 230 (class 1259 OID 19968)
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
-- TOC entry 3274 (class 0 OID 0)
-- Dependencies: 230
-- Name: winner_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.winner_id_seq OWNED BY public.winner.id;


--
-- TOC entry 231 (class 1259 OID 19970)
-- Name: winner_status_type; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.winner_status_type (
    id integer NOT NULL,
    title character varying(100)
);


ALTER TABLE public.winner_status_type OWNER TO postgres;

--
-- TOC entry 3040 (class 2604 OID 20323)
-- Name: checker_log id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.checker_log ALTER COLUMN id SET DEFAULT nextval('public.checker_log_id_seq'::regclass);


--
-- TOC entry 3039 (class 2604 OID 20315)
-- Name: current_game id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.current_game ALTER COLUMN id SET DEFAULT nextval('public.current_game_id_seq'::regclass);


--
-- TOC entry 2970 (class 2604 OID 19973)
-- Name: game id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.game ALTER COLUMN id SET DEFAULT nextval('public.game_id_seq'::regclass);


--
-- TOC entry 3025 (class 2604 OID 20129)
-- Name: gplayer id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gplayer ALTER COLUMN id SET DEFAULT nextval('public.gplayer_id_seq'::regclass);


--
-- TOC entry 2975 (class 2604 OID 19975)
-- Name: item id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item ALTER COLUMN id SET DEFAULT nextval('public.item_id_seq'::regclass);


--
-- TOC entry 2982 (class 2604 OID 19976)
-- Name: prize id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.prize ALTER COLUMN id SET DEFAULT nextval('public.prize_id_seq'::regclass);


--
-- TOC entry 3023 (class 2604 OID 20096)
-- Name: prize_tour id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.prize_tour ALTER COLUMN id SET DEFAULT nextval('public.prize_tour_id_seq'::regclass);


--
-- TOC entry 2983 (class 2604 OID 19977)
-- Name: raffle id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.raffle ALTER COLUMN id SET DEFAULT nextval('public.raffle_id_seq'::regclass);


--
-- TOC entry 3036 (class 2604 OID 20248)
-- Name: shop_buy id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.shop_buy ALTER COLUMN id SET DEFAULT nextval('public.shop_buy_id_seq'::regclass);


--
-- TOC entry 3032 (class 2604 OID 20221)
-- Name: spinner_log id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.spinner_log ALTER COLUMN id SET DEFAULT nextval('public.spinner_log_id_seq'::regclass);


--
-- TOC entry 3021 (class 2604 OID 20053)
-- Name: spinner_rule id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.spinner_rule ALTER COLUMN id SET DEFAULT nextval('public.spinner_rule_id_seq'::regclass);


--
-- TOC entry 2986 (class 2604 OID 19980)
-- Name: subscription id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.subscription ALTER COLUMN id SET DEFAULT nextval('public.subscription_id_seq'::regclass);


--
-- TOC entry 2987 (class 2604 OID 19981)
-- Name: timezones id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.timezones ALTER COLUMN id SET DEFAULT nextval('public.timezones_id_seq'::regclass);


--
-- TOC entry 3024 (class 2604 OID 20121)
-- Name: tour_set id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tour_set ALTER COLUMN id SET DEFAULT nextval('public.tour_set_id_seq'::regclass);


--
-- TOC entry 2988 (class 2604 OID 19982)
-- Name: tournament id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tournament ALTER COLUMN id SET DEFAULT nextval('public.tournament_id_seq'::regclass);


--
-- TOC entry 2990 (class 2604 OID 19983)
-- Name: tournament_set id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tournament_set ALTER COLUMN id SET DEFAULT nextval('public.tournament_set_id_seq'::regclass);


--
-- TOC entry 2992 (class 2604 OID 19984)
-- Name: tournament_set_game_rule id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tournament_set_game_rule ALTER COLUMN id SET DEFAULT nextval('public.tournament_set_game_rule_id_seq'::regclass);


--
-- TOC entry 3017 (class 2604 OID 19985)
-- Name: user id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);


--
-- TOC entry 3022 (class 2604 OID 20083)
-- Name: user_admin_change_log id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_admin_change_log ALTER COLUMN id SET DEFAULT nextval('public.user_admin_change_log_id_seq'::regclass);


--
-- TOC entry 3030 (class 2604 OID 20160)
-- Name: user_invites id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_invites ALTER COLUMN id SET DEFAULT nextval('public.user_invites_id_seq'::regclass);


--
-- TOC entry 3019 (class 2604 OID 19987)
-- Name: winner id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.winner ALTER COLUMN id SET DEFAULT nextval('public.winner_id_seq'::regclass);


--
-- TOC entry 3031 (class 2604 OID 20190)
-- Name: winner_change_log id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.winner_change_log ALTER COLUMN id SET DEFAULT nextval('public.winner_change_log_id_seq'::regclass);


--
-- TOC entry 3121 (class 2606 OID 20326)
-- Name: checker_log checker_log_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.checker_log
    ADD CONSTRAINT checker_log_pkey PRIMARY KEY (id);


--
-- TOC entry 3044 (class 2606 OID 19989)
-- Name: config config_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.config
    ADD CONSTRAINT config_pkey PRIMARY KEY (id);


--
-- TOC entry 3119 (class 2606 OID 20317)
-- Name: current_game current_game_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.current_game
    ADD CONSTRAINT current_game_pkey PRIMARY KEY (id);


--
-- TOC entry 3047 (class 2606 OID 19991)
-- Name: game game_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.game
    ADD CONSTRAINT game_pkey PRIMARY KEY (id);


--
-- TOC entry 3107 (class 2606 OID 20134)
-- Name: gplayer gplayer_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.gplayer
    ADD CONSTRAINT gplayer_pkey PRIMARY KEY (id);


--
-- TOC entry 3050 (class 2606 OID 19995)
-- Name: item item_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item
    ADD CONSTRAINT item_pkey PRIMARY KEY (id);


--
-- TOC entry 3052 (class 2606 OID 19997)
-- Name: item_type item_type_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item_type
    ADD CONSTRAINT item_type_pkey PRIMARY KEY (id);


--
-- TOC entry 3055 (class 2606 OID 19999)
-- Name: prize prize_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.prize
    ADD CONSTRAINT prize_pkey PRIMARY KEY (id);


--
-- TOC entry 3103 (class 2606 OID 20098)
-- Name: prize_tour prize_tour_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.prize_tour
    ADD CONSTRAINT prize_tour_pkey PRIMARY KEY (id);


--
-- TOC entry 3057 (class 2606 OID 20001)
-- Name: prize_type prize_type_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.prize_type
    ADD CONSTRAINT prize_type_pkey PRIMARY KEY (id);


--
-- TOC entry 3059 (class 2606 OID 20003)
-- Name: raffle raffle_entries_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.raffle
    ADD CONSTRAINT raffle_entries_pkey PRIMARY KEY (id);


--
-- TOC entry 3061 (class 2606 OID 20005)
-- Name: rank rank_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.rank
    ADD CONSTRAINT rank_pkey PRIMARY KEY (id);


--
-- TOC entry 3117 (class 2606 OID 20252)
-- Name: shop_buy shop_buy_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.shop_buy
    ADD CONSTRAINT shop_buy_pkey PRIMARY KEY (id);


--
-- TOC entry 3115 (class 2606 OID 20226)
-- Name: spinner_log spinner_log_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.spinner_log
    ADD CONSTRAINT spinner_log_pkey PRIMARY KEY (id);


--
-- TOC entry 3095 (class 2606 OID 20055)
-- Name: spinner_rule spinner_rule_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.spinner_rule
    ADD CONSTRAINT spinner_rule_pkey PRIMARY KEY (id);


--
-- TOC entry 3097 (class 2606 OID 20060)
-- Name: spinner_win_type spinner_win_type_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.spinner_win_type
    ADD CONSTRAINT spinner_win_type_pkey PRIMARY KEY (id);


--
-- TOC entry 3063 (class 2606 OID 20009)
-- Name: status_type status_type_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.status_type
    ADD CONSTRAINT status_type_pkey PRIMARY KEY (id);


--
-- TOC entry 3066 (class 2606 OID 20011)
-- Name: subscription subscription_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.subscription
    ADD CONSTRAINT subscription_pkey PRIMARY KEY (id);


--
-- TOC entry 3068 (class 2606 OID 20013)
-- Name: subscription_type subscription_type_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.subscription_type
    ADD CONSTRAINT subscription_type_pkey PRIMARY KEY (id);


--
-- TOC entry 3070 (class 2606 OID 20015)
-- Name: timezones timezones_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.timezones
    ADD CONSTRAINT timezones_pkey PRIMARY KEY (id);


--
-- TOC entry 3105 (class 2606 OID 20123)
-- Name: tour_set tour_set_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tour_set
    ADD CONSTRAINT tour_set_pkey PRIMARY KEY (id);


--
-- TOC entry 3073 (class 2606 OID 20017)
-- Name: tournament tournament_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tournament
    ADD CONSTRAINT tournament_pkey PRIMARY KEY (id);


--
-- TOC entry 3078 (class 2606 OID 20019)
-- Name: tournament_set_game_rule tournament_set_game_rule_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tournament_set_game_rule
    ADD CONSTRAINT tournament_set_game_rule_pkey PRIMARY KEY (id);


--
-- TOC entry 3076 (class 2606 OID 20021)
-- Name: tournament_set tournament_set_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tournament_set
    ADD CONSTRAINT tournament_set_pkey PRIMARY KEY (id);


--
-- TOC entry 3101 (class 2606 OID 20085)
-- Name: user_admin_change_log user_admin_change_log_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_admin_change_log
    ADD CONSTRAINT user_admin_change_log_pkey PRIMARY KEY (id);


--
-- TOC entry 3085 (class 2606 OID 20023)
-- Name: user user_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_email_key UNIQUE (email);


--
-- TOC entry 3109 (class 2606 OID 20162)
-- Name: user_invites user_invites_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_invites
    ADD CONSTRAINT user_invites_pkey PRIMARY KEY (id);


--
-- TOC entry 3111 (class 2606 OID 20164)
-- Name: user_invites user_invites_user_id_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_invites
    ADD CONSTRAINT user_invites_user_id_key UNIQUE (user_id);


--
-- TOC entry 3087 (class 2606 OID 20029)
-- Name: user user_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);


--
-- TOC entry 3099 (class 2606 OID 20069)
-- Name: user_status_type user_status_type_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.user_status_type
    ADD CONSTRAINT user_status_type_pkey PRIMARY KEY (id);


--
-- TOC entry 3089 (class 2606 OID 20031)
-- Name: user user_username_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_username_key UNIQUE (username);


--
-- TOC entry 3113 (class 2606 OID 20195)
-- Name: winner_change_log winner_change_log_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.winner_change_log
    ADD CONSTRAINT winner_change_log_pkey PRIMARY KEY (id);


--
-- TOC entry 3091 (class 2606 OID 20033)
-- Name: winner winner_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.winner
    ADD CONSTRAINT winner_pkey PRIMARY KEY (id);


--
-- TOC entry 3093 (class 2606 OID 20035)
-- Name: winner_status_type winner_status_type_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.winner_status_type
    ADD CONSTRAINT winner_status_type_pkey PRIMARY KEY (id);


--
-- TOC entry 3045 (class 1259 OID 20036)
-- Name: game_lower_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX game_lower_idx ON public.game USING btree (lower((title)::text));


--
-- TOC entry 3079 (class 1259 OID 20037)
-- Name: idx_user_email; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_user_email ON public."user" USING btree (email);


--
-- TOC entry 3080 (class 1259 OID 20038)
-- Name: idx_user_firstname; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_user_firstname ON public."user" USING btree (firstname);


--
-- TOC entry 3081 (class 1259 OID 20039)
-- Name: idx_user_lastname; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_user_lastname ON public."user" USING btree (lastname);


--
-- TOC entry 3082 (class 1259 OID 20040)
-- Name: idx_user_phone; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_user_phone ON public."user" USING btree (phone);


--
-- TOC entry 3083 (class 1259 OID 20041)
-- Name: idx_user_username; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX idx_user_username ON public."user" USING btree (username);


--
-- TOC entry 3048 (class 1259 OID 20042)
-- Name: item_lower_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX item_lower_idx ON public.item USING btree (lower((title)::text));


--
-- TOC entry 3053 (class 1259 OID 20043)
-- Name: prize_lower_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX prize_lower_idx ON public.prize USING btree (lower((title)::text));


--
-- TOC entry 3064 (class 1259 OID 20044)
-- Name: subscription_lower_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX subscription_lower_idx ON public.subscription USING btree (lower((title)::text));


--
-- TOC entry 3071 (class 1259 OID 20045)
-- Name: tournament_lower_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX tournament_lower_idx ON public.tournament USING btree (lower((title)::text));


--
-- TOC entry 3074 (class 1259 OID 20046)
-- Name: tournament_set_lower_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX tournament_set_lower_idx ON public.tournament_set USING btree (lower((title)::text));


-- Completed on 2021-05-19 22:58:32 +08

--
-- PostgreSQL database dump complete
--

