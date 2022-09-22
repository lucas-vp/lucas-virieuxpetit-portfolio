import React, { useState, useCallback } from "react";
import { Box, Grid, Paper, TextField, Snackbar, AlertColor, Alert } from "@mui/material";
import { useTranslation } from "react-i18next";
import Title from "../../../components/Title";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { LoadingButton } from "@mui/lab";
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import emailjs from '@emailjs/browser';
import Text from "../../../components/Text";
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import BadgeIcon from '@mui/icons-material/Badge';

const Contact = () => {
  const { t } = useTranslation("contact");
  const validationSchema = Yup.object({
    name: Yup
      .string()
      .trim()
      .required(t('enterName')),
    subject: Yup
      .string()
      .trim()
      .required(t('enterSubject')),
    email: Yup
      .string()
      .trim()
      .email(t('validMail'))
      .required(t('enterMail')),
    message: Yup
      .string()
      .trim()
      .required(t('enterMessage')),
    phoneNumber: Yup
      .string(),

  });

  const [loading, setLoading] = useState<boolean>(false)

  const onSubmit = useCallback((values: any, { resetForm }: any) => {
    setLoading((prev) => !prev)
    emailjs.send(process.env.REACT_APP_SERVICE_ID!, process.env.REACT_APP_TEMPLATE_ID!, values, process.env.REACT_APP_PUBLIC_KEY!)
      .then((result) => {
        setLoading((prev) => !prev)
        resetForm()
        setSnackbarForm({
          open: true,
          message: t('successMessage'),
          severity: 'success'
        })
        console.log(result);
      }, (error) => {
        setLoading((prev) => !prev)
        setSnackbarForm({
          open: true,
          message: t('errorMessage'),
          severity: 'error'
        })
        console.log(error);
      });

  }, [t]);

  const initialValues = {
    name: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: '',
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  // snackbar

  const [snackbarForm, setSnackbarForm] = useState<{ open: boolean; message: string; severity: AlertColor | undefined }>({
    open: false,
    message: '',
    severity: undefined
  });

  const handleCloseSnackbar = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarForm(prev => ({ ...prev, open: false }));
  };

  return (
    <Box mx="auto" maxWidth="xl" px={{ xs: 2, lg: 10 }}>
      <Box display="flex" justifyContent="space-between" textAlign="center" pt={{ xs: 2, sm :8 }}>
        <Title lengthBg="80px">{t('contact')}</Title>
        <Paper elevation={4} sx={{ py: 3, px: 4, borderRadius: 3,  mt:{ xs: 7, sm: 0 }, mx:{ xs: 'auto', sm: 0 } }}>
          <Box display="flex" flexWrap="nowrap" alignItems="center" justifyContent="space-around">
            <BadgeIcon sx={{ mr: 3 }} />
            <Text body2>Lucas Virieux-Petit</Text>
          </Box>
          <Box display="flex" flexWrap="nowrap" alignItems="center" justifyContent="space-around" mt={2}>
            <PhoneIphoneIcon sx={{ mr: 5 }} />
            <Box component="a" sx={{ color: 'text.primary', fontWeight: 600 }} href="tel:+33636670630"> 06 36 67 06 30</Box>
          </Box>
        </Paper>
      </Box>
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
      >
        <Grid container spacing={1} rowSpacing={1.2} justifyContent="center">
          <Grid item xs={12} sm={10} md={7} mb={2} mt={{ xs: 2, sm: 0 }}>
            <Text body2 fontSize="20px" bold={900} >{t('leaveMessage')}</Text>
          </Grid>
          <Grid item xs={12} sm={10} md={7}>
            <TextField
              label={t('name')}
              name="name"
              size="small"
              fullWidth
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </Grid>
          <Grid item xs={12} sm={10} md={7}>
            <TextField
              label={t('email')}
              name="email"
              size="small"
              fullWidth
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
          <Grid item xs={12} sm={10} md={7}>
            <TextField
              label={t('phoneNumber')}
              name="phoneNumber"
              size="small"
              fullWidth
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={10} md={7} mt={1}>
            <TextField
              size="small"
              label={t('subject')}
              name="subject"
              fullWidth
              value={formik.values.subject}
              onChange={formik.handleChange}
              error={formik.touched.subject && Boolean(formik.errors.subject)}
              helperText={formik.touched.subject && formik.errors.subject}
            />
          </Grid>
          <Grid item xs={12} sm={10} md={7} mt={1}>
            <TextField
              label={t('message')}
              variant="outlined"
              name="message"
              fullWidth
              multiline
              rows={7}
              value={formik.values.message}
              onChange={formik.handleChange}
              error={formik.touched.message && Boolean(formik.errors.message)}
              helperText={formik.touched.message && formik.errors.message}
            />
          </Grid>
          <Grid item xs={12} sm={10} md={7} textAlign="center" alignSelf="center" mt={1}>
            <LoadingButton
              type="submit"
              loading={loading}
              loadingPosition="end"
              variant="contained"
              size="large"
              endIcon={<SendRoundedIcon />}
              sx={{ fontWeight: 700 }}
            >
              {t('send')}
            </LoadingButton>
          </Grid>
        </Grid>
      </Box>
      <Snackbar open={snackbarForm.open} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert variant="filled" onClose={handleCloseSnackbar} severity={snackbarForm.severity} sx={{ width: '100%', alignItems: 'center' }}>
          {snackbarForm.message}
        </Alert>
      </Snackbar>
    </Box>


  );
};

export default Contact;
