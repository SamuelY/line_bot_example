const express = require('express');
const axios = require('axios');
const line = require('@line/bot-sdk');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.post('/webhook'/*, line.middleware(config)*/, (req, res) => {
    console.log(req.body.events);
    var userId = req.body.events[0].source.userId;
    var message = req.body.events[0].message.text;
    axios.defaults.headers.common['Authorization'] = 'Bearer xoqO/ASvrXG3DppTQRm1d7Y4r83B5Z1iI54lSNJcWBF4XmowPQBCZB/dFg9MykWfOt2Sh6QBNcxQsDnlNpG/7Ghev197Th6hLyk4Wk3dvrJQ03kcXbbZrlzMQXXP35UL6x8B9zjW+5VHtTsVoRmJbQdB04t89/1O/w1cDnyilFU=';
    axios.defaults.headers.post['Content-Type'] = 'application/json';

    if (message != 'test') return;

    var data = {
        "to": userId,
        "messages": [
            {
                "type": "flex",
                "altText": "This is a Flex Message",
                "contents": {
                    "type": "bubble",
                    "header": {
                        "type": "box",
                        "layout": "vertical",
                        "spacing": "sm",
                        "contents": [
                            {
                                "type": "text",
                                "text": "多張圖片，點擊後效果不同",
                                "weight": "bold",
                                "size": "xl"
                            }
                        ]
                    },
                    "body": {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                            {
                                "type": "image",
                                "url": "https://appiconmaker.co/Content/icon_temp.png",
                                "size": "xl",
                                "aspectRatio": "1:1",
                                "aspectMode": "cover",
                                "action": {
                                    "type": "uri",
                                    "label": "顯示網頁",
                                    "uri": "https://www.apple.com/tw/ios/app-store/"
                                }
                            },
                            {
                                "type": "image",
                                "url": "https://miro.medium.com/max/1024/1*gOtFeO2p_WSenEhVFyhMig.png",
                                "size": "xl",
                                "aspectRatio": "1:1",
                                "aspectMode": "cover",
                                "action": {
                                    "type": "message",
                                    "label": "顯示訊息",
                                    "text": "你點擊了第二個圖示"
                                }
                            },
                            {
                                "type": "image",
                                "url": "https://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/calendar-icon.png",
                                "size": "xl",
                                "aspectRatio": "1:1",
                                "aspectMode": "cover",
                                "action": {
                                    "type":"datetimepicker",
                                    "label":"選擇日期",
                                    "data":"storeId=12345",
                                    "mode":"datetime",
                                    "initial":"2017-12-25t00:00",
                                    "max":"2018-01-24t23:59",
                                    "min":"2017-12-25t00:00"
                                }
                            }
                        ]
                    },
                    "footer" :  {
                        "type": "box",
                        "layout": "vertical",
                        "contents": [
                            {
                                "type": "box",
                                "layout": "horizontal",
                                "contents": [
                                    {
                                        "type": "image",
                                        "url": "https://www.stickpng.com/assets/images/5895d300cba9841eabab607b.png",
                                        "size": "xl",
                                        "aspectRatio": "1:1",
                                        "aspectMode": "cover",
                                        "action": {
                                            "type": "message",
                                            "label": "按鈕1",
                                            "text": "1"
                                        }
                                    },
                                    {
                                        "type": "image",
                                        "url": "https://www.stickpng.com/assets/images/5895d300cba9841eabab607b.png",
                                        "size": "xl",
                                        "aspectRatio": "1:1",
                                        "aspectMode": "cover",
                                        "action": {
                                            "type": "message",
                                            "label": "按鈕2",
                                            "text": "2"
                                        }
                                    },
                                    {
                                        "type": "image",
                                        "url": "https://www.stickpng.com/assets/images/5895d300cba9841eabab607b.png",
                                        "size": "xl",
                                        "aspectRatio": "1:1",
                                        "aspectMode": "cover",
                                        "action": {
                                            "type": "message",
                                            "label": "按鈕3",
                                            "text": "3"
                                        }
                                    },
                                ]
                            },
                            {
                                "type": "box",
                                "layout": "horizontal",
                                "contents": [
                                    {
                                        "type": "image",
                                        "url": "https://www.stickpng.com/assets/images/5895d300cba9841eabab607b.png",
                                        "size": "xl",
                                        "aspectRatio": "1:1",
                                        "aspectMode": "cover",
                                        "action": {
                                            "type": "message",
                                            "label": "按鈕4",
                                            "text": "4"
                                        }
                                    },
                                    {
                                        "type": "image",
                                        "url": "https://www.stickpng.com/assets/images/5895d300cba9841eabab607b.png",
                                        "size": "xl",
                                        "aspectRatio": "1:1",
                                        "aspectMode": "cover",
                                        "action": {
                                            "type": "message",
                                            "label": "按鈕5",
                                            "text": "5"
                                        }
                                    },
                                    {
                                        "type": "image",
                                        "url": "https://www.stickpng.com/assets/images/5895d300cba9841eabab607b.png",
                                        "size": "xl",
                                        "aspectRatio": "1:1",
                                        "aspectMode": "cover",
                                        "action": {
                                            "type": "message",
                                            "label": "按鈕6",
                                            "text": "6"
                                        }
                                    },
                                ]
                            },
                        ]
                    },
                    "styles": {
                        "header": {
                            "separatorColor": "#124567"
                        }
                    }
                }
            },
            {
                "type": "text",
                "text": "測試泡泡選單",
                "quickReply": {
                    "items": [
                        {
                            "type": "action",
                            "action": {
                                "type": "message",
                                "label": "泡泡1",
                                "text": "泡泡1"
                            }
                        },
                        {
                            "type": "action",
                            "action": {
                                "type": "message",
                                "label": "泡泡2",
                                "text": "泡泡2"
                            }
                        },
                        {
                            "type": "action",
                            "action": {
                                "type": "message",
                                "label": "泡泡3",
                                "text": "泡泡3"
                            }
                        }
                    ]
                }
            }
        ]
    };

    axios.post('https://api.line.me/v2/bot/message/push', data)
        .then(function(res){
            //console.log(res);
        }).catch(function(error){
        //console.log(error);
    });
});
module.exports = router;
