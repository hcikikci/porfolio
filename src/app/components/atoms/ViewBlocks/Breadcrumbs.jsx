'use client';
import React from 'react';
import {useTranslations} from "next-intl";

const Breadcrumbs = ({page}) => {
    const t = useTranslations('breadcrumbs.'+page);
    return (
        <div className="flex flex-col space-y-2">
            <h2 className="font-semibold text-3xl">/{t("title")}</h2>
            <p>{t("description")}</p>
        </div>
    );
};

export default Breadcrumbs;