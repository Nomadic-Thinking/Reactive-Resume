import clsx from 'clsx';
import { Trans, useTranslation } from 'next-i18next';

type Props = {
  className?: string;
};

const Footer: React.FC<Props> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={clsx('text-xs', className)}>
      <p>{t('common.footer.license')}</p>

      <p>
        <Trans t={t} i18nKey="common.footer.credit">
          This website is part of
          <a href="https://itcarriere.com/" target="_blank" rel="noreferrer">
            IT Career Coaching
          </a>
        </Trans>
      </p>
    </div>
  );
};

export default Footer;
