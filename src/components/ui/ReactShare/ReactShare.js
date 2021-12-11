import React, { useState } from 'react'
import { EmailIcon, EmailShareButton, FacebookIcon, FacebookShareButton, InstapaperIcon, InstapaperShareButton, LinkedinIcon, LinkedinShareButton, PinterestIcon, PinterestShareButton, TelegramIcon, TelegramShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from "react-share";
import { Button, ClickAwayListener, Paper } from '@material-ui/core';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import './ReactShare.scss'
import CustomModal from '../CustomModal';
import CustomTooltip from '../CustomTooltip';

const socialButtons = [
    { Button: FacebookShareButton, Icon: FacebookIcon, label: 'Facebook' },
    { Button: TwitterShareButton, Icon: TwitterIcon, label: 'Twitter' },
    { Button: TelegramShareButton, Icon: TelegramIcon, label: 'Telegram' },
    { Button: WhatsappShareButton, Icon: WhatsappIcon, label: 'Whatsapp' },
    { Button: LinkedinShareButton, Icon: LinkedinIcon, label: 'Linkedin' },
    { Button: PinterestShareButton, Icon: PinterestIcon, label: 'Pinterest' },
    { Button: EmailShareButton, Icon: EmailIcon, label: 'Email' },
    { Button: InstapaperShareButton, Icon: InstapaperIcon, label: 'Instapaper' },
]

const iconProps = { size: 32, round: true }

const ReactShare = ({ url, close, list }) => {
    if (!list) list = [...socialButtons.label]

    const [copied, setCopied] = useState(false);
    const caption = '';

    const title = 'CarrotGain'
    const hashtag = ['CarrotGain']

    const buttonProps = {
        url,
        quote: caption,
        className: "Demo__some-network__share-button",
        title,
        hashtag,
        separator: ": ",
        // media={`${String(window.location)}/${exampleImage}`}
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(url);
        setCopied(true);
    }

    return (
        <div className='reactShare'>
            <CustomModal body={
                <ClickAwayListener onClickAway={close}>
                    <div className="reactShareModal">
                        <div className="socialButtons">
                            {socialButtons.map(({ Button, Icon, label }, i) =>
                                list.includes(label.toLowerCase()) && <div key={i} className="socialButton">
                                    <CustomTooltip
                                        title={`Share on ${label}`}
                                        body={<Button {...buttonProps}>
                                            <Icon {...iconProps} />
                                        </Button>}
                                        arrow
                                    />
                                </div>
                            )}
                        </div>
                        <Paper elevation={5} className="copylink">
                            <p>{url}</p>
                            <Button
                                endIcon={<FileCopyIcon className={copied && "buttonIcon"} />}
                                className={copied && 'copied'}
                                onClick={copyToClipboard}
                            >Copy
                            </Button>
                        </Paper>
                    </div>
                </ClickAwayListener>
            } />
        </div>
    )
}

export default ReactShare