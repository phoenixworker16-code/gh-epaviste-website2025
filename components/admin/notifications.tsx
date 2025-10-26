"use client"

import { useState } from "react"
import { Bell, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Notification {
  id: string
  type: 'new_demande' | 'status_change' | 'system'
  title: string
  message: string
  timestamp: Date
  read: boolean
}

export default function AdminNotifications() {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: '1',
      type: 'new_demande',
      title: 'Nouvelle demande',
      message: 'Une nouvelle demande d\'enlèvement a été reçue',
      timestamp: new Date(),
      read: false
    },
    {
      id: '2',
      type: 'system',
      title: 'Système',
      message: 'Sauvegarde automatique effectuée',
      timestamp: new Date(Date.now() - 3600000),
      read: true
    }
  ])
  const [showNotifications, setShowNotifications] = useState(false)

  const unreadCount = notifications.filter(n => !n.read).length

  const markAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(n => n.id === id ? { ...n, read: true } : n)
    )
  }

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })))
  }

  return (
    <div className="relative">
      <Button 
        variant="outline" 
        size="sm"
        onClick={() => setShowNotifications(!showNotifications)}
        className="relative"
      >
        <Bell className="w-4 h-4 mr-2" />
        Notifications
        {unreadCount > 0 && (
          <Badge 
            variant="destructive" 
            className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
          >
            {unreadCount}
          </Badge>
        )}
      </Button>

      {showNotifications && (
        <Card className="absolute right-0 top-12 w-80 z-50 shadow-lg">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Notifications</CardTitle>
              <div className="flex items-center space-x-2">
                {unreadCount > 0 && (
                  <Button variant="ghost" size="sm" onClick={markAllAsRead}>
                    Tout marquer lu
                  </Button>
                )}
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setShowNotifications(false)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="max-h-96 overflow-y-auto">
            {notifications.length === 0 ? (
              <p className="text-gray-500 text-center py-4">Aucune notification</p>
            ) : (
              <div className="space-y-3">
                {notifications.map((notification) => (
                  <div 
                    key={notification.id}
                    className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                      notification.read 
                        ? 'bg-gray-50 border-gray-200' 
                        : 'bg-blue-50 border-blue-200'
                    }`}
                    onClick={() => markAsRead(notification.id)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{notification.title}</h4>
                        <p className="text-xs text-gray-600 mt-1">{notification.message}</p>
                        <p className="text-xs text-gray-400 mt-2">
                          {notification.timestamp.toLocaleString('fr-FR')}
                        </p>
                      </div>
                      {!notification.read && (
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-1"></div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  )
}