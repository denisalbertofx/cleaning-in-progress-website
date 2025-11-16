'use client'

import { useState } from 'react'
import Image from 'next/image'
import { MapPin, Phone, Mail, MessageCircle, Send, CheckCircle2, Clock, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useToast } from '@/hooks/use-toast'
import { ScrollReveal } from '@/components/ScrollReveal'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import mockData from '@/data/mock-data.json'

import { getWhatsAppUrl, getPhoneUrl, getEmailUrl, contactInfo } from '@/lib/contact-info'

export default function ContactoPage() {
  const { services } = mockData
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateField = (name: string, value: string) => {
    let error = ''
    
    switch (name) {
      case 'fullName':
        if (!value.trim()) {
          error = 'El nombre es requerido'
        } else if (value.trim().length < 2) {
          error = 'El nombre debe tener al menos 2 caracteres'
        }
        break
      case 'phone':
        if (!value.trim()) {
          error = 'El teléfono es requerido'
        } else if (!/^[\d\s\-\+\(\)]+$/.test(value)) {
          error = 'Formato de teléfono inválido'
        }
        break
      case 'email':
        if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = 'Formato de email inválido'
        }
        break
    }
    
    return error
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validar todos los campos requeridos
    const newErrors: Record<string, string> = {}
    Object.keys(formData).forEach((key) => {
      if (key === 'fullName' || key === 'phone') {
        const error = validateField(key, formData[key as keyof typeof formData])
        if (error) {
          newErrors[key] = error
        }
      }
    })
    
    if (formData.email) {
      const emailError = validateField('email', formData.email)
      if (emailError) {
        newErrors.email = emailError
      }
    }
    
    setErrors(newErrors)
    setTouched({
      fullName: true,
      phone: true,
      email: true,
      service: true,
      message: true,
    })
    
    if (Object.keys(newErrors).length > 0) {
      toast({
        title: 'Error de validación',
        description: 'Por favor, corrige los errores en el formulario.',
        variant: 'destructive',
        duration: 5000,
      })
      return
    }
    
    setIsSubmitting(true)
    
    // Simular envío (en modo design)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        service: '',
        message: '',
      })
      setErrors({})
      setTouched({})
      toast({
        title: '¡Mensaje enviado!',
        description: 'Nos pondremos en contacto contigo en menos de 24 horas.',
        duration: 5000,
      })
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
    
    if (touched[name]) {
      const error = validateField(name, value)
      setErrors({
        ...errors,
        [name]: error,
      })
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setTouched({
      ...touched,
      [name]: true,
    })
    
    const error = validateField(name, value)
    setErrors({
      ...errors,
      [name]: error,
    })
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#F7F9FA] to-white flex items-center justify-center py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center bg-white p-12 rounded-2xl shadow-2xl border border-gray-100">
            <div className="w-20 h-20 bg-gradient-to-br from-[#00A884] to-[#008f6f] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <CheckCircle2 className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-[#1A1A1A] mb-4">
              ¡Mensaje Enviado con Éxito!
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Gracias por contactarnos. Hemos recibido tu solicitud y nos pondremos en contacto contigo en menos de 24 horas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => setIsSubmitted(false)}
                className="bg-[#0056A6] hover:bg-[#004494] text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                Enviar Otro Mensaje
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-[#0056A6] text-[#0056A6] hover:bg-[#0056A6] hover:text-white px-8 py-6 text-lg font-semibold"
              >
                <a href="/">Volver al Inicio</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#F7F9FA]">
      {/* Hero Section - Mejorado móvil 2025 */}
      <section className="relative bg-gradient-to-br from-[#0056A6] via-[#004494] to-[#0056A6] py-16 sm:py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')]" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-white/20 backdrop-blur-sm rounded-full mb-4 sm:mb-6 shadow-soft">
                <span className="text-xs sm:text-sm font-semibold text-white">CONTACTO</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 drop-shadow-lg leading-[1.1] sm:leading-tight px-2">
                Contáctanos
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 leading-relaxed text-readable px-4">
                Estamos aquí para ayudarte. Solicita tu cotización gratuita hoy mismo.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Content - Mejorado móvil 2025 */}
      <section className="section-spacing -mt-8 sm:-mt-10 relative z-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <div className="bg-white/95 backdrop-blur-sm p-6 sm:p-8 md:p-10 rounded-2xl shadow-medium border border-gray-100/50">
                  <div className="mb-8">
                    <div className="inline-block px-4 py-2 bg-[#0056A6]/10 rounded-full mb-4">
                      <span className="text-sm font-semibold text-[#0056A6]">SOLICITA TU COTIZACIÓN</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-3">
                      Completa el Formulario
                    </h2>
                    <p className="text-gray-600">
                      Llena el formulario y nos pondremos en contacto contigo lo antes posible.
                    </p>
                  </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName" className="text-[#1A1A1A] font-semibold text-sm">
                        Nombre Completo <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`h-12 border-2 rounded-lg transition-colors ${
                          errors.fullName
                            ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                            : touched.fullName
                            ? 'border-green-500 focus:border-[#0056A6] focus:ring-[#0056A6]/20'
                            : 'border-gray-200 focus:border-[#0056A6] focus:ring-[#0056A6]/20'
                        }`}
                        placeholder="Juan Pérez"
                      />
                      {errors.fullName && (
                        <p className="text-sm text-red-500 mt-1 flex items-center">
                          <span className="mr-1">⚠</span>
                          {errors.fullName}
                        </p>
                      )}
                      {touched.fullName && !errors.fullName && formData.fullName && (
                        <p className="text-sm text-green-600 mt-1 flex items-center">
                          <span className="mr-1">✓</span>
                          Nombre válido
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-[#1A1A1A] font-semibold text-sm">
                        Teléfono <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`h-12 border-2 rounded-lg transition-colors ${
                          errors.phone
                            ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                            : touched.phone
                            ? 'border-green-500 focus:border-[#0056A6] focus:ring-[#0056A6]/20'
                            : 'border-gray-200 focus:border-[#0056A6] focus:ring-[#0056A6]/20'
                        }`}
                        placeholder="+1 (305) 555-0123"
                      />
                      {errors.phone && (
                        <p className="text-sm text-red-500 mt-1 flex items-center">
                          <span className="mr-1">⚠</span>
                          {errors.phone}
                        </p>
                      )}
                      {touched.phone && !errors.phone && formData.phone && (
                        <p className="text-sm text-green-600 mt-1 flex items-center">
                          <span className="mr-1">✓</span>
                          Teléfono válido
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[#1A1A1A] font-semibold text-sm">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`h-12 border-2 rounded-lg transition-colors ${
                        errors.email
                          ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                          : touched.email && formData.email && !errors.email
                          ? 'border-green-500 focus:border-[#0056A6] focus:ring-[#0056A6]/20'
                          : 'border-gray-200 focus:border-[#0056A6] focus:ring-[#0056A6]/20'
                      }`}
                      placeholder="juan@ejemplo.com"
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500 mt-1 flex items-center">
                        <span className="mr-1">⚠</span>
                        {errors.email}
                      </p>
                    )}
                    {touched.email && !errors.email && formData.email && (
                      <p className="text-sm text-green-600 mt-1 flex items-center">
                        <span className="mr-1">✓</span>
                        Email válido
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-[#1A1A1A] font-semibold text-sm">
                      Servicio de Interés
                    </Label>
                    <Select
                      value={formData.service}
                      onValueChange={(value) => setFormData({ ...formData, service: value })}
                    >
                      <SelectTrigger
                        id="service"
                        className="h-12 w-full border-2 border-gray-200 focus:border-[#0056A6] focus:ring-2 focus:ring-[#0056A6]/20 rounded-lg transition-all text-[#1A1A1A] font-medium bg-white hover:border-gray-300 data-[placeholder]:text-gray-400"
                      >
                        <SelectValue placeholder="Selecciona un servicio" />
                      </SelectTrigger>
                      <SelectContent className="rounded-lg border-2 border-gray-200 shadow-2xl bg-white z-50">
                        {services.map((service) => (
                          <SelectItem
                            key={service.id}
                            value={service.title}
                            className="cursor-pointer py-3 px-4 text-[#1A1A1A] hover:bg-[#F7F9FA] focus:bg-[#0056A6]/10 focus:text-[#0056A6] transition-colors rounded-md my-1 mx-1 data-[highlighted]:bg-[#0056A6]/10 data-[highlighted]:text-[#0056A6]"
                          >
                            {service.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-[#1A1A1A] font-semibold text-sm">
                      Mensaje
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className="min-h-[140px] border-2 border-gray-200 focus:border-[#0056A6] focus:ring-2 focus:ring-[#0056A6]/20 rounded-lg transition-colors resize-none"
                      placeholder="Cuéntanos sobre tus necesidades de limpieza..."
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#0056A6] hover:bg-[#004494] text-white h-14 text-lg font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <Clock className="w-5 h-5 mr-2 animate-spin" />
                        Enviando...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center">
                        <Send className="w-5 h-5 mr-2" />
                        Enviar Solicitud
                      </span>
                    )}
                  </Button>
                </form>
                </div>
              </ScrollReveal>
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                {/* Contact Information Card */}
                <ScrollReveal direction="right">
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-[#0056A6]/10 rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-[#0056A6]" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1A1A1A]">
                      Información de Contacto
                    </h3>
                  </div>
                  <div className="space-y-5">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex items-start space-x-4 p-3 rounded-lg hover:bg-[#F7F9FA] transition-colors cursor-help">
                          <div className="w-10 h-10 bg-[#0056A6]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Phone className="w-5 h-5 text-[#0056A6]" />
                          </div>
                          <div>
                            <p className="font-semibold text-[#1A1A1A] mb-1">Teléfono</p>
                            <a
                              href={getPhoneUrl()}
                              className="text-[#0056A6] hover:text-[#004494] font-medium transition-colors"
                            >
                              {contactInfo.phone}
                            </a>
                          </div>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Haz clic para llamar directamente</p>
                      </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex items-start space-x-4 p-3 rounded-lg hover:bg-[#F7F9FA] transition-colors cursor-help">
                          <div className="w-10 h-10 bg-[#0056A6]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Mail className="w-5 h-5 text-[#0056A6]" />
                          </div>
                          <div>
                            <p className="font-semibold text-[#1A1A1A] mb-1">Email</p>
                            <a
                              href={getEmailUrl('Consulta sobre servicios de limpieza')}
                              className="text-[#0056A6] hover:text-[#004494] font-medium transition-colors break-all"
                            >
                              {contactInfo.emailCommercial}
                            </a>
                          </div>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Haz clic para enviar un correo</p>
                      </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex items-start space-x-4 p-3 rounded-lg hover:bg-[#F7F9FA] transition-colors cursor-help">
                          <div className="w-10 h-10 bg-[#0056A6]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                            <MapPin className="w-5 h-5 text-[#0056A6]" />
                          </div>
                          <div>
                            <p className="font-semibold text-[#1A1A1A] mb-1">Áreas de Servicio</p>
                            <p className="text-gray-600 leading-relaxed text-sm">
                              Servicio móvil en toda el área metropolitana de Miami
                            </p>
                            <a
                              href={contactInfo.googleMapsUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#0056A6] hover:text-[#004494] text-sm font-medium mt-1 inline-flex items-center"
                            >
                              Ver áreas en Google Maps →
                            </a>
                          </div>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Servicio móvil - Atendemos en toda el área de Miami</p>
                      </TooltipContent>
                    </Tooltip>
                    <div className="pt-4 border-t border-gray-200">
                      <div className="flex items-start space-x-4 p-3 rounded-lg">
                        <div className="w-10 h-10 bg-[#0056A6]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Clock className="w-5 h-5 text-[#0056A6]" />
                        </div>
                        <div>
                          <p className="font-semibold text-[#1A1A1A] mb-1">Horarios</p>
                            <p className="text-sm text-gray-600 leading-relaxed">{contactInfo.businessHours}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                </ScrollReveal>

                {/* Quick Contact Card */}
                <ScrollReveal direction="right" delay={0.2}>
                  <div className="bg-gradient-to-br from-[#0056A6]/95 to-[#004494]/95 backdrop-blur-md p-6 rounded-2xl shadow-lg text-white border border-white/20">
                  <h3 className="text-xl font-bold mb-4">
                    Contacto Rápido
                  </h3>
                  <p className="text-white/90 mb-6 text-sm">
                    ¿Necesitas una respuesta inmediata? Contáctanos ahora mismo.
                  </p>
                  <div className="space-y-3">
                    <Button
                      asChild
                      className="w-full bg-[#00A884] hover:bg-[#008f6f] text-white font-semibold h-12 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <a
                        href={getWhatsAppUrl('Hola, me gustaría solicitar información sobre sus servicios de limpieza.')}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle className="w-5 h-5 mr-2" />
                        Hablar por WhatsApp
                      </a>
                    </Button>
                    <Button
                      asChild
                      className="w-full bg-white hover:bg-gray-100 text-[#0056A6] font-semibold h-12 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <a href={getPhoneUrl()}>
                        <Phone className="w-5 h-5 mr-2" />
                        Llamar Ahora
                      </a>
                    </Button>
                  </div>
                  </div>
                </ScrollReveal>

                {/* Google Maps */}
                <ScrollReveal direction="right" delay={0.4}>
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">
                      Ubicación
                    </h3>
                    <div className="rounded-xl overflow-hidden shadow-md border border-gray-200">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114964.38943784567!2d-80.290556!3d25.7617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6f0f82ee6ac68d83%3A0x5fa01743d70c3070!2sCleaning%20in%20Progress%20Miami!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full"
                        title="Áreas de Servicio - Cleaning in Progress Miami"
                      />
                    </div>
                    <a
                      href={contactInfo.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center text-sm text-[#0056A6] hover:text-[#004494] font-medium transition-colors"
                    >
                      <MapPin className="w-4 h-4 mr-2" />
                      Ver en Google Maps
                    </a>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


