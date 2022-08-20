import { useState, useEffect, useCallback } from 'react'

import { View, Text } from '@tarojs/components';

import moment, { Moment } from 'moment'

import './index.less'

type DateList = {
    week: number,
    day: number,
    date: Moment
}

interface CalanderProps {
    onChange?: (value: Moment) => void
}

const weeks = ['M', 'T', 'W', 'T', 'F', 'S', 'S']

const Index: React.FC<CalanderProps> = (props) => {
    const { onChange } = props

    const [days, setDays] = useState<DateList[]>([])
    const [curDay, setCurDay] = useState<DateList>()

    const [headerDate, setHeaderDate] = useState<DateList>()


    const preClick = () => {
        const firstDay = days[0]
        const startDate = firstDay.date.add(-7, 'day')
        const dateArr = getDateArr(startDate)
        setDays(dateArr)
        setHeaderDate(dateArr[3])
    }
    const nextClick = () => {
        const lastDay = days[days.length - 1]
        const startDate = lastDay.date.add(1, 'day')
        const dateArr = getDateArr(startDate)
        setDays(dateArr)
        setHeaderDate(dateArr[3])
    }

    const getDateArr = (startDate: Moment): DateList[] => {
        const dateArr: DateList[] = []
        for (let index = 0; index < 7; index++) {
            const nextDay: Moment = startDate.clone().add(index, 'day')
            dateArr.push({ week: nextDay.day(), day: nextDay.date(), date: nextDay })
        }
        return dateArr
    }

    const initDate = useCallback(() => {
        const curDate = moment()
        const week = curDate.day() == 0 ? 7 : curDate.day() //获取本周一的时间
        const startDate = curDate.clone().add(1 - week, 'day')
        const dateArr = getDateArr(startDate)
        setDays(dateArr)
        setHeaderDate(dateArr[3])
        setCurDay({ week: curDate.day(), date: curDate, day: curDate.date() })
    }, [])

    useEffect(() => {
        initDate()
    }, [initDate])

    return <View className='calander-wrapper'>
        <View className='header-bar'>
            <View onClick={preClick}>
                〈
            </View>
            <View className='date-month-year'>
                {
                    headerDate ? <Text>{headerDate.date.month() + 1}月 {headerDate.date.year()}</Text> : null
                }
            </View>
            <View onClick={nextClick}>
                〉
            </View>
        </View>
        <View className='weeks'>
            {
                weeks.map(item => (
                    <View key={item} className="item">
                        {item}
                    </View>
                ))
            }
        </View>

        <View className='days'>
            {
                days.map(item => (
                    <View key={item.week}
                        className={
                            `item 
                        ${item.date.isSame(curDay?.date) ? 'active' : ''}
                        ${item.date.month() !== headerDate?.date.month() ? 'other' : ''}
                        `
                        }
                        onClick={() => {
                            setCurDay(item)
                            onChange?.(item.date)
                        }}>
                        {item.day}
                    </View>
                ))
            }
        </View>

        {
            curDay ? <View className='select-time' onClick={initDate}>
                Current Select Date 「 {curDay.date.year()}-{curDay.date.month() + 1}-{curDay.day} 」
            </View> : null
        }

    </View>
}

export default Index;