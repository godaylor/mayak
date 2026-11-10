import { Link, Section, Text } from "@react-email/components";
import React from "react";
import { resolveEmailLocale } from "./resolve-locale";
import { EmailShell, styles } from "./shell";

void React;

export type NotificationEmailProps = {
  title: string;
  message: string;
  actionUrl?: string | null;
  actionLabel?: string;
  locale?: string | null;
};

const messages = {
  en: {
    preview: "You have a new Маяк notification",
    subtitle: "A notification matched your delivery preferences.",
    footer: "Маяк notification",
    actionLabel: "Open in Маяк",
  },
  de: {
    preview: "Du hast eine neue Маяк-Benachrichtigung",
    subtitle:
      "Eine Benachrichtigung entspricht deinen Zustellungs-Einstellungen.",
    footer: "Маяк-Benachrichtigung",
    actionLabel: "In Маяк oeffnen",
  },
  vi: {
    preview: "Bạn có thông báo mới từ Маяк",
    subtitle: "Một thông báo khớp với tùy chọn nhận thông báo của bạn.",
    footer: "Thông báo Маяк",
    actionLabel: "Mở trong Маяк",
  },
  ja: {
    preview: "Маяк の新しい通知",
    subtitle: "配信設定に一致する通知がありました。",
    footer: "Маяк 通知",
    actionLabel: "Маяк で開く",
  },
} as const;

const NotificationEmail = ({
  title,
  message,
  actionUrl,
  actionLabel,
  locale,
}: NotificationEmailProps) => {
  const copy = messages[resolveEmailLocale(locale)];

  return (
    <EmailShell preview={copy.preview} title={title} subtitle={copy.subtitle}>
      <Section>
        <Text style={styles.paragraph}>{message}</Text>
        {actionUrl ? (
          <Link style={styles.button} href={actionUrl}>
            {actionLabel ?? copy.actionLabel}
          </Link>
        ) : null}
        <Section style={styles.divider} />
        <Text style={styles.footer}>{copy.footer}</Text>
      </Section>
    </EmailShell>
  );
};

NotificationEmail.PreviewProps = {
  title: "Task assigned to you",
  message: "You were assigned to Design account notifications.",
  actionUrl: "https://relayops.example",
} as NotificationEmailProps;

export default NotificationEmail;
