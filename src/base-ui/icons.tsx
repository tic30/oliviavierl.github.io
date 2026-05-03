import { forwardRef } from "react";
import { Icon } from "./core";

const createIcon = (name: string) =>
  forwardRef<any, any>((props, ref) => (
    <Icon ref={ref} {...props}>
      {name}
    </Icon>
  ));

export const CloseIcon = createIcon("close");
export const Close = CloseIcon;
export const EmailIcon = createIcon("mail");
export const Email = EmailIcon;
export const FacebookIcon = createIcon("facebook");
export const Facebook = FacebookIcon;
export const GitHubIcon = createIcon("code");
export const GitHub = GitHubIcon;
export const HistoryEduIcon = createIcon("history_edu");
export const HistoryEdu = HistoryEduIcon;
export const InstagramIcon = createIcon("photo_camera");
export const Instagram = InstagramIcon;
export const KeyboardArrowDownIcon = createIcon("keyboard_arrow_down");
export const KeyboardArrowDown = KeyboardArrowDownIcon;
export const LinkedInIcon = createIcon("group");
export const LinkedIn = LinkedInIcon;
export const LocationOnIcon = createIcon("location_on");
export const LocationOn = LocationOnIcon;
export const PinterestIcon = createIcon("push_pin");
export const Pinterest = PinterestIcon;
export const TwitterIcon = createIcon("alternate_email");
export const Twitter = TwitterIcon;
export const YouTubeIcon = createIcon("smart_display");
export const YouTube = YouTubeIcon;
