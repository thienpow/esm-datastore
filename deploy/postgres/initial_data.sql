--
-- public.config
--
COPY public.config (id, invites, games_per_ad, days_to_claim, game_loader_template, freespin_per_day, gems_per_spins_1, ads_per_spins_1, gems_per_spins_2, ads_per_spins_2) FROM stdin;
1	10	3	30	0	3	1	0	2	0
\.
--
-- public.user_status_type
--
COPY public.user_status_type (id, title) FROM stdin;
0	Not Selected
1	Active
2	Blocked
3	Pending Delete
4	Archived
\.
--
-- public.spinner_win_type
--
COPY public.spinner_win_type (id, title) FROM stdin;
1	Tickets
2	Gems
3	Cash
4	Free Spin
\.
--
-- public.item_type
--
COPY public.item_type (id, title) FROM stdin;
0	Not Selected
1	Gem
\.
--
-- public.prize_type
--
COPY public.prize_type (id, title) FROM stdin;
0	Not Selected
4	Automated Entry
3	Time Sensitive
1	Featured
2	Premium
\.
--
-- public.status_type
--
COPY public.status_type (id, title) FROM stdin;
0	Not Selected
1	Draft
2	Published
3	Archived/Disabled
\.
--
-- public.subscription_type
--
COPY public.subscription_type (id, title) FROM stdin;
0	Not Selected
1	Day
2	Week
3	Month
4	Year
\.
--
-- public.winner_status_type
--
COPY public.winner_status_type (id, title) FROM stdin;
1	Unclaimed
2	Claimed
3	Delivered
4	Expired
\.
--
-- public.timezones
--
COPY public."timezones" (id, "offset", stext, ltext) FROM stdin;
1	-12	GMT -12:00	(GMT -12:00) Eniwetok, Kwajalein
2	-11	GMT -11:00	(GMT -11:00) Midway Island, Samoa
3	-10	GMT -10:00	(GMT -10:00) Hawaii
4	-9	GMT -9:00	(GMT -9:00) Alaska
5	-8	GMT -8:00	(GMT -8:00) Pacific Time (US & Canada)
6	-7	GMT -7:00	(GMT -7:00) Mountain Time (US & Canada)
7	-6	GMT -6:00	(GMT -6:00) Central Time (US & Canada), Mexico City
8	-5	GMT -5:00	(GMT -5:00) Eastern Time (US & Canada), Bogota, Lima
9	-4	GMT -4:00	(GMT -4:00) Atlantic Time (Canada), Caracas, La Paz
10	-3.5	GMT -3:30	(GMT -3:30) Newfoundland
11	-3	GMT -3:00	(GMT -3:00) Brazil, Buenos Aires, Georgetown
12	-2	GMT -2:00	(GMT -2:00) Mid-Atlantic
13	-1	GMT -1:00	(GMT -1:00) Azores, Cape Verde Islands
14	0	GMT -0:00	(GMT) Western Europe Time, London, Lisbon, Casablanca
15	1	GMT +1:00	(GMT +1:00) Brussels, Copenhagen, Madrid, Paris
16	2	GMT +2:00	(GMT +2:00) Kaliningrad, South Africa
17	3	GMT +3:00	(GMT +3:00) Baghdad, Riyadh, Moscow, St. Petersburg
18	3.5	GMT +3:30	(GMT +3:30) Tehran
19	4	GMT +4:00	(GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi
20	4.5	GMT +4:30	(GMT +4:30) Kabul
21	5	GMT +5:00	(GMT +5:00) Ekaterinburg, Islamabad, Karachi, Tashkent
22	5.5	GMT +5:30	(GMT +5:30) Bombay, Calcutta, Madras, New Delhi
23	5.75	GMT +5:45	(GMT +5:45) Kathmandu
24	6	GMT +6:00	(GMT +6:00) Almaty, Dhaka, Colombo
25	7	GMT +7:00	(GMT +7:00) Bangkok, Hanoi, Jakarta
26	8	GMT +8:00	(GMT +8:00) Beijing, Perth, Singapore, Hong Kong
27	9	GMT +9:00	(GMT +9:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk
28	9.5	GMT +9:30	(GMT +9:30) Adelaide, Darwin
29	10	GMT +10:00	(GMT +10:00) Eastern Australia, Guam, Vladivostok
30	11	GMT +11:00	(GMT +11:00) Magadan, Solomon Islands, New Caledonia
31	12	GMT +12:00	(GMT +12:00) Auckland, Wellington, Fiji, Kamchatka
\.
--
-- public.rank
--
COPY public."rank" (id, title, "exp", gem, multiplier) FROM stdin;
1	Level  1	0	0	0
2	Level 2	15	1	0.02
3	Level 3	50	1	0.03
4	Level 4	100	1	0.04
5	Level 5	180	1	0.05
6	Level 6	300	2	0.06
7	Level 7	450	2	0.07
8	Level 8	630	2	0.08
9	Level 9	850	2	0.09
10	Level 10	1100	2	0.1
11	Level 11	1850	3	0.11
12	Level 12	2850	3	0.12
13	Level 13	4100	3	0.13
14	Level 14	5600	3	0.14
15	Level 15	7350	3	0.15
16	Level 16	9500	5	0.16
17	Level 17	11800	5	0.17
18	Level 18	14300	5	0.18
19	Level 19	17050	5	0.19
20	Level 20	20000	10	0.2
\.
--
-- public.user
--
COPY public."user" (id, username, passhash, email, phone, firstname, lastname, created_on, last_login, role_id, status, gem_balance, social_link_fb, social_link_google, avatar_url, exp, full_name, country_code, address, city, state, zip_code, country, is_email_confirmed, is_notify_allowed, is_notify_new_reward, is_notify_new_tournament, is_notify_tour_ending, nick_name, rank, msg_token, subscription_id, one_time_multiplier, daily_gem, daily_multiplier, one_time_is_firstonly, sub_daily_timestamp, exp_timestamp, msg_token_timestamp, sub_id) FROM stdin;
51	player1	$argon2id$v=19$m=64,t=1,p=1$pb7+cdRKchBGWxfmx6nHinqmLY4ir5vc4+LSsPwbpDg$kwfH/p8iEmxcTjKqzyWs8sekvIns2Qt4vSvbS/Pxz9U	player1@gmail.com	123	Player	One	2020-12-31 15:07:54.239332	2020-12-31 15:07:54.239332	200	2	180				0		0						f	f	f	f	f		0		0	0	0	0	f	1970-01-01 00:00:00	1970-01-01 00:00:00	1970-01-01 00:00:00	
57	BsEvjBBwAXf7iYPr2JZGPw2Ox5z1	$argon2id$v=19$m=64,t=1,p=1$2jjZ9C51p6h9t99YxXfKQcZTlIvBrlDqboZhDqWc+3E$J+CBi0Ilwz8SKK3Wjod4lqc1LM8IFSYaGK4G4YKYc6A	rohail384test@gmail.com		Rohail	Tariq	2021-04-12 04:09:37.141931	2021-04-12 04:09:37.141931	200	1	0			https://lh5.googleusercontent.com/-CbPAo4UpzM4/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucnj2pnnKiE4GKqGbGUDdaBhI0HvOQ/s96-c/photo.jpg	0		0						f	f	f	f	f		0		0	0	0	0	f	1970-01-01 00:00:00	1970-01-01 00:00:00	1970-01-01 00:00:00	
55	sOytvIqW6zUvHmQbgnIzigtp6ax2	$argon2id$v=19$m=64,t=1,p=1$WERVV6Qm77XntsQ+7bS4MJEoEwWwSxD67naxRBx68mY$XXfKkkoHZPrnWtrT9ZGKsqkDTy/9RKojHk55oYCYsdk	atrallis384@gmail.com	12345678	At	Rallis	2021-03-25 02:37:35.503418	2021-03-25 02:37:35.503418	200	1	0			https://lh3.googleusercontent.com/a-/AOh14GhdyVq5INDX2ySe9bePv4UiDNNhlPA2HlrkrI1_Sg=s96-c	0		0						f	f	f	f	f		0		0	0	0	0	f	1970-01-01 00:00:00	1970-01-01 00:00:00	1970-01-01 00:00:00	
56	x3u4O0MFYbcIqc7H6wZTpvK5sAK2	$argon2id$v=19$m=64,t=1,p=1$4JD/ix5ICfO2SEtlW8bhE66VC83hfMw2QNo4vCLhZHk$4kEZNb6FNRIFmaPzjh3yxDbgo/+UyzpGL15t4tL3tCs	rohail384@gmail.com	1234567800	Rohail	Tariq	2021-04-09 04:22:13.123075	2021-04-09 04:22:13.123075	200	1	0			https://lh3.googleusercontent.com/a-/AOh14GibA0bY_IRJW--Nn9Q8GISaLlZi3wPeyO8zHrBYlg=s96-c	0		0						f	f	f	f	f		0	fbL-uqlo40UTxZ4rhs4rbu:APA91bEbJKwSf2RY-cstQrzv2Io_a-ONLxfZoM_Pp-5EZ4mVWJpjC1265ABg5RPaBwLGS1QBQSJOZaUWT76gmXu1OR3z8kmra6s28ks49OIDbA4vOLOZY2zFcp1GDR1V6RaUNSBgeX08	0	0	0	0	f	1970-01-01 00:00:00	1970-01-01 00:00:00	1970-01-01 00:00:00	
52	S77rrH8NhafvYaXTVsg0LWe8sPv1	$argon2id$v=19$m=64,t=1,p=1$bCQNkEPfC1D484qIvqiunwWYRXj2bqU3gx7QQy8pQhs$qeOt10oQzDJBE1DU8eZu4kkxhXL8FURIXte53U4FYsE	thienpow@gmail.com		Thien Pow Chong		2021-03-24 04:33:11.029931	2021-05-31 10:09:34.960868	200	1	15227			../images/avatars/avatar-01.svg	192	Ken	60	B-18-12	Tanjung Tokong	Pulau Pinang	10470	Malaysia	f	t	t	t	t	KEN	0	dnoc3SeyESGge6RcnPlo5C:APA91bHUx5HPQPyT9O3SJWl0RQxO09wkp44KDr5YuiwStO9dRvhU3hsutMt12f6hYnbj_iLDrJkG6JeXyvOvqhPNny-fGXkf2FQ_iZx-5JWTEFOy1FRcQTAX_6eYycgT3-BbXxRTvFi4	4	0	0	2	t	2021-05-31 08:25:56.427379	2021-05-31 08:25:56.428516	2021-05-30 11:40:26.808477	sub_JXnrRcSGB1MIVO
53	UibTPpH2G9e06QGom6xMUBWLw8x1	$argon2id$v=19$m=64,t=1,p=1$D3Wm5wYGiQo1PhtA4JGYFolCYcU6yL0L4JOEtJvK9lE$Q6eXUARreHJX4avodLKfznmWeHzHmsExvMUJQp1DmGc	rohail@esportsmini.com	0142615352	Rohail T		2021-03-24 04:34:01.58158	2021-05-31 10:18:58.612129	200	1	10157			../images/avatars/avatar-01.svg	345	rohail	60	hartmas regency 1	kuala lumpur	Wilayah Persekutuan (Kuala Lumpur)	51200	Malaysia	f	t	t	t	t	Rohail Tariq	0	e_tUmsE54Xxx-Ujd6RdgXe:APA91bEyTNVT4SspRAKGCTrgU6f2eC5IJRaKaB9LUHzLb57ngc27TsQRleaWv5ogtdlJcDyL-r390cYChnYUK6dFzGJgO79XAqjeCFKeAK-q-sBDrvT-zrdRLoHERzi69n89jYe4CFFY	4	0	0	0.5	f	2021-05-31 09:30:12.435157	2021-05-31 09:30:12.43674	2021-05-27 10:49:55.015688	sub_JaEUpAENQShcmU
58	tNQg2zRLfRWFpncwU8d7nPggNc93	$argon2id$v=19$m=64,t=1,p=1$SqPz+U3/RCP+MDYx9fKrEjB224pgaRscuv3BIOxK4s8$1Lj3zwnfkuCRunNF91gOS1Lyhui299WpC9/T0rtaofM	heman@esportsmini.com	333664873	Heman	Ling	2021-05-24 07:53:11.031254	2021-05-31 10:20:44.35625	200	1	17			https://lh3.googleusercontent.com/a/AATXAJyPU7np7w5SVUjTDFpR1ZvH-WdxiTojP_MBT3kS=s96-c	146		0						f	f	f	f	f		0		0	0	0	0	f	2021-05-31 08:44:19.930517	2021-05-31 08:44:19.931538	1970-01-01 00:00:00	
1	wukong	$argon2id$v=19$m=64,t=1,p=1$pb7+cdRKchBGWxfmx6nHinqmLY4ir5vc4+LSsPwbpDg$kwfH/p8iEmxcTjKqzyWs8sekvIns2Qt4vSvbS/Pxz9U	esmadmin@aadi.my	0188888888	Black	Myth	2020-12-31 15:07:54.239332	2021-05-31 10:28:27.69873	1	1	0				2		0						f	f	f	f	f		0		1	0	0	0	f	2021-05-24 12:07:26.856779	1970-01-01 00:00:00	1970-01-01 00:00:00	
\.
--
-- public.checker_log
--
COPY public.checker_log (id, current_game_checked_on, current_game_time_spent, leaderboard_checked_on, leaderboard_time_spent, subscriber_checked_on, subscriber_time_spent) FROM stdin;
1	2021-05-31 11:00:34.223663	55	2021-05-31 10:59:18.546515	4495	2021-05-31 11:00:17.475124	1
\.
COPY public.spinner_rule (id, probability, win, type_id) FROM stdin;
1	5	300	1
2	5	150	1
3	0.5	500	1
4	1.5	400	1
5	3	350	1
6	7.5	200	1
7	7.5	150	1
8	30	50	1
9	30	25	1
10	10	10	1
\.
COPY public.status_progress_type (id, title) FROM stdin;
0	Inactive
1	Running
666	Bad Link
999	Ended
9999	SOS Stopped
\.
