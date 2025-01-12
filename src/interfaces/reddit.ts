export interface LinkFlairRichtext {
  e: string;
  t: string;
  a: string;
  u: string;
}

export interface AuthorFlairRichtext {
  e: string;
  t: string;
  a: string;
  u: string;
}

export interface Gildings {
  gid_1?: number;
  gid_2?: number;
}

export interface Source {
  url: string;
  width: number;
  height: number;
}

export interface Resolution {
  url: string;
  width: number;
  height: number;
}

export interface Image {
  source: Source;
  resolutions: Resolution[];
  id: string;
}

export interface RedditVideoPreview {
  fallback_url: string;
  height: number;
  width: number;
  scrubber_media_url: string;
  dash_url: string;
  duration: number;
  hls_url: string;
  is_gif: boolean;
  transcoding_status: string;
}

export interface Preview {
  images: Image[];
  enabled: boolean;
  reddit_video_preview: RedditVideoPreview;
}

export interface ResizedIcon {
  url: string;
  width: number;
  height: number;
}

export interface ResizedStaticIcon {
  url: string;
  width: number;
  height: number;
}

export interface AllAwarding {
  giver_coin_reward?: number;
  subreddit_id: string;
  is_new: boolean;
  days_of_drip_extension: number;
  coin_price: number;
  id: string;
  penny_donate?: number;
  award_sub_type: string;
  coin_reward: number;
  icon_url: string;
  days_of_premium: number;
  resized_icons: ResizedIcon[];
  icon_width: number;
  static_icon_width: number;
  start_date?: Date;
  is_enabled: boolean;
  description: string;
  end_date?: Date;
  subreddit_coin_reward: number;
  count: number;
  static_icon_height: number;
  name: string;
  resized_static_icons: ResizedStaticIcon[];
  icon_format: string;
  icon_height: number;
  penny_price?: number;
  award_type: string;
  static_icon_url: string;
}

export interface Data2 {
  approved_at_utc?: Date;
  subreddit: string;
  selftext: string;
  author_fullname: string;
  saved: boolean;
  mod_reason_title?: string;
  gilded: number;
  clicked: boolean;
  title: string;
  link_flair_richtext: LinkFlairRichtext[];
  subreddit_name_prefixed: string;
  hidden: boolean;
  pwls: number;
  link_flair_css_class: string;
  downs: number;
  thumbnail_height: number;
  hide_score: boolean;
  name: string;
  quarantine: boolean;
  link_flair_text_color: string;
  upvote_ratio: number;
  author_flair_background_color: string;
  subreddit_type: string;
  ups: number;
  total_awards_received: number;
  thumbnail_width: number;
  author_flair_template_id: string;
  is_original_content: boolean;
  is_reddit_media_domain: boolean;
  is_meta: boolean;
  link_flair_text: string;
  can_mod_post: boolean;
  score: number;
  author_premium: boolean;
  thumbnail: string;
  edited: boolean;
  author_flair_css_class: string;
  author_flair_richtext: AuthorFlairRichtext[];
  gildings: Gildings;
  post_hint: string;
  is_self: boolean;
  created: number;
  link_flair_type: string;
  wls: number;
  author_flair_type: string;
  domain: string;
  allow_live_comments: boolean;
  suggested_sort: string;
  url_overridden_by_dest: string;
  archived: boolean;
  no_follow: boolean;
  is_crosspostable: boolean;
  pinned: boolean;
  over_18: boolean;
  preview: Preview;
  all_awardings: AllAwarding[];
  media_only: boolean;
  link_flair_template_id: string;
  can_gild: boolean;
  spoiler: boolean;
  locked: boolean;
  author_flair_text: string;
  visited: boolean;
  subreddit_id: string;
  link_flair_background_color: string;
  id: string;
  is_robot_indexable: boolean;
  author: string;
  num_comments: number;
  send_replies: boolean;
  whitelist_status: string;
  contest_mode: boolean;
  author_patreon_flair: boolean;
  author_flair_text_color: string;
  permalink: string;
  parent_whitelist_status: string;
  stickied: boolean;
  url: string;
  subreddit_subscribers: number;
  created_utc: number;
  num_crossposts: number;
  is_video: boolean;
}

export interface Child {
  kind: string;
  data: Data2;
}

export interface Data {
  modhash: string;
  dist: number;
  children: Child[];
  after: string;
}

export interface RootObject {
  kind: string;
  data: Data;
}
